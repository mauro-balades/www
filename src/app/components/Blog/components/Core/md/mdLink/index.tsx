import {Prism} from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';
import {NavHashLink} from 'react-router-hash-link';

export default function({href, target, ...props}: any) {

    let shouldTargetBlank = (!href.startsWith("#") || target);

    return shouldTargetBlank ? (<a href={href} target="_blank" {...props}></a>)
        : <NavHashLink replace to={href} {...props} />
}
