import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/dracula';

export default function({className, ...props}: any) {
    const match = /language-(\w+)/.exec(className || '')
    return match
      ? <SyntaxHighlighter style={style} language={match[1]} PreTag="div" {...props} />
      : <code className={className} {...props} />
}
