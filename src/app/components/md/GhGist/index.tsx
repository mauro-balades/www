import ReactEmbedGist from 'react-embed-gist';

export default function(props: any) {
    const {style, ...extraProps} = props;

    return (
        <>
            <ReactEmbedGist {...extraProps}/>
        </>
    );
}
