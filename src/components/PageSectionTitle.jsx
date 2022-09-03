import clsx from 'clsx';
import { Colors } from '../Constants';

export const PageSectionTitle = (props) => {
    return <h2
          className="text-capitalize text-nowrap font-weight-bold mx-4 mx-sm-5 mb-4 mb-sm-5 w-25"
          style={{ 
                fontSize: "xx-large", 
                color: Colors.stopColor
            }}
        >
            <i className="fas fa-lg fa-utensils mr-2 "></i>
            <span
              className="d-block d-sm-inline-block"
              style={props.textStyleObject}
            >
              {props.text}
            </span>
        </h2>
}