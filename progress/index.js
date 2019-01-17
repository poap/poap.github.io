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
    url = "https://kr.api.blizzard.com/wow/character/" + server + "/" + character + "?fields=progression,+reputation&locale=ko_KR&access_token=USqykSRNKrG3B81eCttqaWqUDMZpw4hN99";
    r.open("GET", url, true);
    r.withCredentials = false;
    r.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	r.setRequestHeader('Access-Control-Allow-Origin', '*');
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
    //console.log(data);
    //console.log(target);
    //console.log('\n\n');
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
    antorus.data.datasets.push(dataset);
    antorus.update();
	
    target = data.progression.raids[38];
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
    tos.data.datasets.push(dataset);
    tos.update();
	
    target = data.progression.raids[37];
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
    nighthold.data.datasets.push(dataset);
    nighthold.update();
	
    target = data.progression.raids[36];
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
    tov.data.datasets.push(dataset);
    tov.update();
	
    target = data.progression.raids[35];
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
    emerald_nightmare.data.datasets.push(dataset);
    emerald_nightmare.update();

    if (test_.length > 0) getData("줄진", test_.pop());
};

var j = [];
getData("줄진", "커피에우유");

document.body.style.backgroundColor = 'rgba(238, 238, 238, 1)';
Chart.defaults.global.elements.rectangle.minSize = 2;

var ctx_antorus = document.getElementById("antorus").getContext('2d');
var antorus = new Chart(ctx_antorus, {
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

var ctx_tos = document.getElementById("tos").getContext('2d');
var tos = new Chart(ctx_tos, {
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

var ctx_nighthold = document.getElementById("nighthold").getContext('2d');
var nighthold = new Chart(ctx_nighthold, {
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

var ctx_tov = document.getElementById("tov").getContext('2d');
var tov = new Chart(ctx_tov, {
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

var ctx_emerald_nightmare = document.getElementById("emerald_nightmare").getContext('2d');
var emerald_nightmare = new Chart(ctx_emerald_nightmare, {
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
