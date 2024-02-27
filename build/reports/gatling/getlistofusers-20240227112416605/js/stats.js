var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "319",
        "ok": "319",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4141",
        "ok": "4141",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles1": {
        "total": "193",
        "ok": "192",
        "ko": "-"
    },
    "percentiles2": {
        "total": "619",
        "ok": "619",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1242",
        "ok": "1242",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2982",
        "ok": "2982",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 240,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 55,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.267",
        "ok": "21.267",
        "ko": "-"
    }
},
contents: {
"req_get-user-list-85ae1": {
        type: "REQUEST",
        name: "GET_USER_LIST",
path: "GET_USER_LIST",
pathFormatted: "req_get-user-list-85ae1",
stats: {
    "name": "GET_USER_LIST",
    "numberOfRequests": {
        "total": "319",
        "ok": "319",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4141",
        "ok": "4141",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "499",
        "ok": "499",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "571",
        "ok": "571",
        "ko": "-"
    },
    "percentiles1": {
        "total": "193",
        "ok": "192",
        "ko": "-"
    },
    "percentiles2": {
        "total": "619",
        "ok": "619",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1242",
        "ok": "1242",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2982",
        "ok": "2982",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 240,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 55,
    "percentage": 17
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.267",
        "ok": "21.267",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
