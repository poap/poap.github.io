var loading = false;
var classColor = ['rgba(199, 156, 110, 1)', 'rgba(245, 140, 186, 1)', 'rgba(171, 212, 115, 1)', 'rgba(255, 245, 105, 1)', 'rgba(255, 255, 255, 1)', 'rgba(196, 31, 59, 1)', 'rgba(0, 112, 222, 1)', 'rgba(105, 204, 240, 1)', 'rgba(148, 130, 201, 1)', 'rgba(0, 255, 150, 1)', 'rgba(255, 125, 10, 1)', 'rgba(163, 48, 201, 1)'];
var test_ = ["커피에워터", "커피에환타"];
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
    url = "https://kr.api.battle.net/wow/character/" + server + "/" + character + "?fields=progression,+reputation&locale=ko_KR&apikey=q7xpvsdyvsmhjk9y63jhsafgak5neah8"
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
};

function load(data) {
    classIndex = data.class - 1;
    target = data.progression.raids[39];
    console.log(data);
    console.log(target);
    console.log('\n\n');
    name = target.name;
    length = target.bosses.length;
    kills = [
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
    data_ = kills.map(function (x) {
        return x.filter(function (x) {
            return x > 0;
        }).length;
    });
    backgroundColor = data_.map(function (x) {
        return classColor[classIndex];
    });
    dataset = {
        "label": data.name,
        "data": data_,
        "labelData": [target.bosses.map(function (x) {
            return x.name;
        }), kills],
        "backgroundColor": backgroundColor
    };
    test.data.datasets.push(dataset);
    test.update();

    if (test_.length > 0) getData("줄진", test_.pop());
};

var j = [];
getData("줄진", "커피에우유");

var ctx = document.getElementById("test").getContext('2d');
document.body.style.backgroundColor = 'rgba(238, 238, 238, 1)';
Chart.defaults.global.elements.rectangle.minSize = 2;
var test = new Chart(ctx, {
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
