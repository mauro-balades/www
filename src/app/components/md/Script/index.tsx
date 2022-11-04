function makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export default function(props: any) {
    let id = makeid(50);
    function addScript( src: string ) {
        var s = document.createElement( 'script' );
        s.setAttribute( 'src', src );

        document.getElementsByClassName(`current-script-${id}`)[0]?.insertAdjacentElement('afterend', s);
    }

    addScript(props.src);
    return <span id={`current-script-${id}`}></span>;
}
