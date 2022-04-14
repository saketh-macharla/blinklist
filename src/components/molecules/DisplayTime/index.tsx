import { ReactNode } from "react";
import Timer from "../../atoms/Timer/Timer";
import Time from "../../atoms/Time/Time";
import { customStyles } from "../../../theme";


export interface IDisplayTimeProps {
  children: ReactNode;
}

export default function DisplayTime(props: IDisplayTimeProps) {
  const classes = customStyles();
  return (
    <div className={classes.time}>
      <Time />
      <Timer>{props.children}</Timer>
    </div>
  );
}
