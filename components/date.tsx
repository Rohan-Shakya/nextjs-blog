import { format } from "date-fns";

const DateComponent = ({ date }) => {
  return <time dateTime={date}>{format(new Date(date), `LLLL d, yyyy`)}</time>;
};

export default DateComponent;
