import ReactEmbedGist from 'react-embed-gist';
import { ThemedGist } from './style';

export default function(props: any) {
    const {style, ...extraProps} = props;

    return (
        <ThemedGist>
            <ReactEmbedGist {...extraProps}/>
        </ThemedGist>
    );
}
