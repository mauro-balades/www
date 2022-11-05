import ReactEmbedGist from 'react-embed-gist';
import { DarkGist } from './style';

export default function(props: any) {
    const {style, ...extraProps} = props;

    return (
        <DarkGist>
            <ReactEmbedGist {...extraProps}/>
        </DarkGist>
    );
}
