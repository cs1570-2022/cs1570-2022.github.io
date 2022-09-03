
export const PageLinks = (props) => {
    return <ul class="list-inline">
        {props.names.map((name, index) => (
            <li
            className="d-flex flex-column list-inline-item"
            key={index}
          >
              <PageLink
                text={name}
                href={props.urls[index]}
              />
          </li>
        ))}    
    </ul>
}