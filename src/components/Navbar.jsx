import clsx from "clsx";
import { useState } from "react";
import { Colors, Sections } from "../Constants";

export const LargeNavbarStopIcon = (props) => {
    const classArray =  [props.isCurrentStop ? 'visible' : 'invisible'];
    return <i
        style={{ color: Colors.stopColor }}
        className={clsx("mb-2", classArray)}
        >
    </i>
}

const LargeNavbarStopCircle = (props) => {

    const radius = props.radius ?? 0.7;
    const diameter = 2 * radius;
    const styleObject = {
        width: `${diameter}rem`,
        height: `${diameter}rem`,
        border: `solid thin ${Colors.primaryColor}`,
        backgroundColor: props.isCurrentStop ? Colors.stopColor : 'white',
    }
    return <div
        className="navbar-stop-circle d-flex flex-row justify-content-center align-items-center rounded-circle"
        style={styleObject}>
            <i
            style={{ backgroundColor: Colors.stopColor }}
            className="fas fa-coffee fa-xs"></i>
    </div>
}

const LargeNavbarStopLabel = (props) => (
    <span className="font-weight-bold text-capitalize text-bold text-decoration-none" style={{ color: Colors.primaryColor }}>{props.text}</span>
)

const LargeNavbarStop = (props) => {
    const [hovering, setHovering] = useState(false);
    return <div
    className="d-flex flex-column justify-content-center align-items-center"
    style={{
        cursor: 'pointer',
        zIndex: 1,
    }}
    onMouseEnter={() => setHovering(true)}
    onMouseLeave={() => setHovering(false)}
    onClick={() => window.location.href = props.pageFilepath}>
      <LargeNavbarStopIcon
        isCurrentStop={props.isCurrentStop}
        />
      <LargeNavbarStopCircle
        isCurrentStop={props.isCurrentStop}
        hovering={hovering}
        />
      <LargeNavbarStopLabel
        text={props.label}
        />
  </div>
}

const CollapsedNavbarIcon = (props) => {
    return <div
    className="mr-2"
    onClick={props.expandNavbar}
    >
        <i
        style={{
            color: props.color,
            cursor: 'pointer',
        }}
        className={props.iconClasses}
        >
    </i>
</div>
}

const CollapsedNavbarStop = (props) => {
    return  <span
    className="collapsed-navbar-stop badge mr-2 text-capitalize badge-pill"
    style={{
        color: Colors.primaryColor,
        backgroundColor: Colors.backgroundColor,
        cursor: 'pointer',
        height: '20%',
        width: '90%',
        margin: '10px',
        fontSize: '20px',
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '250%'
    }}
    onClick={props.onClick}
    >{props.text}</span>
}

const CollapsedNavbar = () => {
    const [expanded, setExpanded] = useState(true);
    
    return  <div className="navbar-toggler">
    <div className="d-flex flex-row">
        <CollapsedNavbarIcon
          color={Colors.primaryColor}
          is-expanded={expanded}
        />
        <div
          className={expanded ? ['d-flex flex-column justify-content-between align-items-start'] : []}
          style={{
              backgroundColor:'#027800',
              padding: '10px',
              height: '600px',
              width: '300px',
              border: '5px solid black',
              position: 'absolute',
              top: '0px',
              left: '75px'
          }}
          >
            {Sections.map((labelText, index) => (
                <CollapsedNavbarStop
                    key={index}
                    text={labelText}
                    onClick={() => {}}
               />
            ))}
        </div>
    </div>
</div>
}

export const PageNavbar = (props) => {
    const [currentStop, setCurrentStop] = useState('Algorithms');

    return <nav
    className="navbar navbar-expand-md fixed-top"
    style={{backgroundColor: '#027800', height: '100px'}}
  >
      <CollapsedNavbar />
      <div className="collapse navbar-collapse">
          <div className="container d-flex flex-row justify-content-between py-2">
              <div
                id="navbar-stop-connecting-line"
                className="rounded-pill d-inline-block position-absolute"
                style={{backgroundColor: 'white', height: 9}}
              >
              </div>
              {Sections.map((labelText, index) => (
                <LargeNavbarStop
                    key={index}
                    onClick={() => {}}
                    label={labelText}
                    isCurrentStop={currentStop === labelText} 
                    setCurrentStop={setCurrentStop}/>
              ))}
            </div>
      </div>
  </nav>
}