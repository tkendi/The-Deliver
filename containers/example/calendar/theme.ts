import moment from "moment";

export const MONTHLY_CUSTOM_THEME = {
  // month header 'dayname'
  "month.dayname.textAlign": "center",
  "month.dayname.borderLeft": "none",
  "month.dayname.borderTop": "none",
  "month.dayname.fontWeight": "400",
  // "month.dayname.fontColor": "#698096",
  // "month.dayname.fontSize": "12px",
  // "month.dayname.fontFamily": "Noto Sans KR",

  // month day grid cell 'day'
  "month.holidayExceptThisMonth.color": "#f3acac",
  "month.dayExceptThisMonth.color": "#bbb",
  "month.weekend.backgroundColor": "#fff",
  "month.day.fontSize": "16px",

  // month schedule style
  "month.schedule.borderRadius": "20px",
  "month.schedule.height": "18px",
  "month.schedule.marginTop": "2px",
  "month.schedule.marginLeft": "10px",
  "month.schedule.marginRight": "10px",

  // month more view
  "month.moreView.boxShadow": "none",
  "month.moreView.paddingBottom": "0",
  "month.moreView.border": "1px solid #9a935a",
  "month.moreView.backgroundColor": "#f9f3c6",
  "month.moreViewTitle.height": "28px",
  "month.moreViewTitle.marginBottom": "0",
  "month.moreViewTitle.backgroundColor": "#f4f4f4",
  "month.moreViewTitle.borderBottom": "1px solid #ddd",
  "month.moreViewTitle.padding": "0 10px",
  "month.moreViewList.padding": "10px",
};

function getTimeTemplate(schedule, isAllDay) {
  var html = [];

  if (!isAllDay) {
    html.push(
      "<strong>" +
        moment(schedule.start.getTime()).format("HH:mm") +
        "</strong> "
    );
  }
  if (schedule.isPrivate) {
    html.push('<span class="calendar-font-icon ic-lock-b">asdf</span>');
    html.push(" Private");
  } else {
    if (schedule.isReadOnly) {
      html.push(
        '<p style="color: red, font-size: 20px" class="calendar-font-icon ic-readonly-b">asdf</p>'
      );
    } else if (schedule.recurrenceRule) {
      html.push('<span class="calendar-font-icon ic-repeat-b">asdf</span>');
    } else if (schedule.attendees.length) {
      html.push('<span class="calendar-font-icon ic-user-b">asdf</span>');
    } else if (schedule.location) {
      html.push('<span class="calendar-font-icon ic-location-b">asdf</span>');
    }
    html.push("[icon position] &nbsp" + schedule.title);
  }

  return html.join("");
}

function getGridTitleTemplate(type) {
  var title = "";

  switch (type) {
    case "milestone":
      title = '<span class="tui-full-calendar-left-content">MILESTONE</span>';
      break;
    case "task":
      title = '<span class="tui-full-calendar-left-content">TASK</span>';
      break;
    case "allday":
      title = '<span class="tui-full-calendar-left-content">ALL DAY</span>';
      break;
  }

  return title;
}

function getGridCategoryTemplate(category, schedule) {
  var tpl;

  switch (category) {
    case "milestone":
      tpl =
        '<span class="calendar-font-icon ic-milestone-b">asdfsaf</span> <span style="background-color: ' +
        schedule.bgColor +
        '">' +
        schedule.title +
        "</span>";
      break;
    case "task":
      tpl = "#" + schedule.title;
      break;
    case "allday":
      tpl = getTimeTemplate(schedule, true);
      break;
  }

  return tpl;
}

// register templates
export const templates = {
  milestone: function (schedule) {
    return getGridCategoryTemplate("milestone", schedule);
  },
  milestoneTitle: function () {
    return getGridTitleTemplate("milestone");
  },
  task: function (schedule) {
    return getGridCategoryTemplate("task", schedule);
  },
  taskTitle: function () {
    return getGridTitleTemplate("task");
  },
  allday: function (schedule) {
    return getTimeTemplate(schedule, true);
  },
  alldayTitle: function () {
    return getGridTitleTemplate("allday");
  },
  time: function (schedule) {
    console.log("schdule", schedule);
    return getTimeTemplate(schedule, false);
  },
  goingDuration: function (schedule) {
    return (
      '<span class="calendar-icon ic-travel-time"></span>' +
      schedule.goingDuration +
      "min."
    );
  },
  comingDuration: function (schedule) {
    return (
      '<span class="calendar-icon ic-travel-time"></span>' +
      schedule.comingDuration +
      "min."
    );
  },
  monthMoreTitleDate: function (date, dayname) {
    var day = date.split(".")[2];
    return (
      '<span class="tui-full-calendar-month-more-title-day">' +
      day +
      '</span> <span class="tui-full-calendar-month-more-title-day-label">' +
      dayname +
      "</span>"
    );
  },
  monthMoreClose: function () {
    return '<span class="tui-full-calendar-icon tui-full-calendar-ic-close"></span>';
  },
  monthGridHeader: function (dayModel) {
    var date = parseInt(dayModel.date.split("-")[2], 10);
    var classNames = ["tui-full-calendar-weekday-grid-date "];

    if (dayModel.isToday) {
      classNames.push("tui-full-calendar-weekday-grid-date-decorator");
    }

    return '<span class="' + classNames.join(" ") + '">' + date + "</span>";
  },
  monthGridHeaderExceed: function (hiddenSchedules) {
    return (
      '<span class="weekday-grid-more-schedules">+' +
      hiddenSchedules +
      "</span>"
    );
  },
  monthGridFooter: function () {
    return "";
  },
  monthGridFooterExceed: function (hiddenSchedules) {
    return "";
  },
  monthDayname: function (model) {
    return String(model.label).toLocaleUpperCase();
  },
  dayGridTitle: function (viewName) {
    /*
     * use another functions instead of 'dayGridTitle'
     * milestoneTitle: function() {...}
     * taskTitle: function() {...}
     * alldayTitle: function() {...}
     */

    return getGridTitleTemplate(viewName);
  },
  schedule: function (schedule) {
    /*
     * use another functions instead of 'schedule'
     * milestone: function() {...}
     * task: function() {...}
     * allday: function() {...}
     */

    return getGridCategoryTemplate(schedule.category, schedule);
  },
};
