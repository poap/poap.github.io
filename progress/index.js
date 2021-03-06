var loading = false;
var classColor = ['rgba(199, 156, 110, 1)', 'rgba(245, 140, 186, 1)', 'rgba(171, 212, 115, 1)', 'rgba(255, 245, 105, 1)', 'rgba(255, 255, 255, 1)', 'rgba(196, 31, 59, 1)', 'rgba(0, 112, 222, 1)', 'rgba(105, 204, 240, 1)', 'rgba(148, 130, 201, 1)', 'rgba(0, 255, 150, 1)', 'rgba(255, 125, 10, 1)', 'rgba(163, 48, 201, 1)'];
var test_ = ["커피에포도", "커피에녹차", "커피에선지", "커피에와인", "커피에락스", "커피에얼음", "커피에초코", "커피에홍차", "커피에맥주", "커피에워터", "커피에환타"];
// 1:   warrior
// 2:   paladin
// 3:   hunter
// 4:   rogue
// 5:   priest
// 6:   death knight
// 7:   shaman
// 8:   mage
// 9:   warlock
// 10:  monk
// 11:  druid
// 12:  demon hunter

function getData(server, character) {
    if (loading) return;
    loading = true;

    server = encodeURIComponent(server);
    character = encodeURIComponent(character);

    var r = new XMLHttpRequest();
    var url = "https://kr.api.blizzard.com/wow/character/" + server + "/" + character + "?fields=progression,+reputation&locale=ko_KR&access_token=" + at;
    r.open("GET", url, true);
    r.withCredentials = false;
    r.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;
        j = JSON.parse(r.responseText);
        load(j);
    };
    r.send(null);

    loading = false;
}

function load(data) {
    for(var i=0; i<charts.length; i++) {
        charts[i].data.datasets.push(makeDataset(data.progression.raids[41-i], data.name, data.class - 1));
        charts[i].update();
    }

    if (test_.length > 0) getData("줄진", test_.pop());
}

function makeDataset(target, character_name, classIndex) {
    //raid_name = target.name;
    //length = target.bosses.length;
    var kills = [
        target.bosses.map(function (x) {
            return x.mythicKills;
        }),
        target.bosses.map(function (x) {
            return x.heroicKills;
        }),
        target.bosses.map(function (x) {
            return x.normalKills;
        }),
        target.bosses.map(function (x) {
            return x.lfrKills;
        })
    ];
    var data_ = kills.map(function (x) {
        return x.filter(function (x) {
            return x > 0;
        }).length;
    });
    var backgroundColor = data_.map(function (x) {
        return classColor[classIndex];
    });
    var dataset = {
        "label": character_name,
        "data": data_,
        "labelData": [target.bosses.map(function (x) {
            return x.name;
        }), kills],
        "backgroundColor": backgroundColor
    };

    return dataset;
}

function makeChart(element_id) {
    return new Chart(document.getElementById(element_id).getContext('2d'), {
        type: 'horizontalBar',
        data: {
            labels: ["Mythic", "Heroic", "Normal", "LFR"],
            datasets: []
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        return dataset.labelData[0].map(function (x, i) {
                            return x + ": " + dataset.labelData[1][tooltipItem.index][i] + "\n"
                        })
                    }
                },
                displayColors: false,
                mode: 'y',
                position: 'nearest'
            }
        }
    });
}

var j = [];
var at = window.prompt("","");
getData("줄진", "커피에우유");

document.body.style.backgroundColor = 'rgba(238, 238, 238, 1)';
Chart.defaults.global.elements.rectangle.minSize = 2;

var charts = [
    makeChart('bod'),
    makeChart('uldir'),
    makeChart('antorus'),
    makeChart('tos'),
    makeChart('nighthold'),
    makeChart('tov'),
    makeChart('emerald_nightmare')
];
