import { Alert, Icon } from "./style";

export default function(props: any) {
    return (
        <Alert {...props}>
            <Icon type={props.type}>
                {props.type == "info" ? (
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                ) : null}
            </Icon>
            {props.children}
        </Alert>
    )
}
