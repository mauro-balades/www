import {Prism} from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark';

export default function({className, ...props}: any) {
    const match = /language-(\w+)/.exec(className || '')
    return match
      ? <Prism style={style} language={match[1]} className="md-language-hl" PreTag="div" {...props} />
      : <code className={className} {...props} />
}
