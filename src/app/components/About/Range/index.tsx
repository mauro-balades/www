import Slider from 'react-rangeslider';
import { Wrapper, Text } from './styles';

export default ({ range, setRange }: any) => {
    return (
        <Wrapper>
            <Text>Less advertisement</Text>
            <Slider value={range} onChange={(v: number) => setRange(v)} tooltip={false} min={0} max={100} step={10} />
            <Text>More advertisement</Text>
        </Wrapper>
    )
}
