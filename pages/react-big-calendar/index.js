import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import Link from "next/link";

const localizer = momentLocalizer(moment); //日本語に設定ができるみたい。まだ調査出来ていない。
const eventList = [
  {
    id: 0,
    title: "診察台１",
    allDay: false,
    start: new Date("2020-12-20 14:00"),
    end: new Date("2020-12-20 16:00"),
  },
  {
    id: 1,
    title: "診察台２",
    allDay: false,
    start: new Date("2020-12-20 15:00"),
    end: new Date("2020-12-20 18:00"),
  },
  {
    id: 2,
    title: "診察台３",
    allDay: false,
    start: new Date("2020-12-20 15:00"),
    end: new Date("2020-12-20 18:00"),
  },
  {
    id: 3,
    title: "診察台４",
    allDay: false,
    start: new Date("2020-12-20 15:00"),
    end: new Date("2020-12-20 18:00"),
  },
];

export default function ReactBigCarendar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/react-big-calendar">
            <a>react-big-calendar</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>top</a>
          </Link>
        </li>
      </ul>
      <div>
        <Calendar
          localizer={localizer}
          events={eventList} //配列でイベントを入れれる
          timeslots={4} //時間の区切り
          defaultView={Views.WEEK} //デフォルトの表示
          onSelectEvent={(event) => console.log(event)} //イベントをクリックした時の動作を指定s
          style={{ height: 600 }} //カレンダーの全体の高さ
        />
      </div>
    </div>
  );
}
