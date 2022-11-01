
import styled from 'styled-components';

export const DefaultBlob = styled.div`
    --color-gradient-1: ${(props: any) => props.rgb[0]};
    --color-gradient-2: ${(props: any) => props.rgb[1]};
    --color-gradient-3: ${(props: any) => props.rgb[2]};

    max-height: 800px;
    height: 80vh;
    max-width: 1400px;

    width: 100%;
    filter: blur(44px);

    background: radial-gradient(at 71% 77%,var(--color-gradient-1) 0,transparent 21%),
        radial-gradient(at 36% 47%,var(--color-gradient-3) 0,transparent 50%),
        radial-gradient(at 54% 29%,var(--color-gradient-3) 0,transparent 28%),
        radial-gradient(at 45% 51%,var(--color-gradient-1) 0,transparent 53%),
        radial-gradient(at 73% 44%,var(--color-gradient-2) 0,transparent 54%),
        radial-gradient(at 24% 7%,var(--color-gradient-2) 0,transparent 40%),
        radial-gradient(at 76% 46%,var(--color-gradient-1) 0,transparent 50%);
`

export const SimpleBlob = styled.div`
    max-height: 800px;
    height: 80vh;
    max-width: 1400px;

    width: 100%;

    filter: blur(150px);
    transform: rotate(-20.37deg);

    background: linear-gradient(207.77deg,
        rgba(212, 183, 33, 0.4) 1.9%,
        rgba(212, 33, 140, 0.4) 37.15%,
        rgba(54, 72, 169, 0.4) 100.9%);
`

export const SimpleBlob2 = styled.div`
    max-height: 800px;
    height: 80vh;
    max-width: 1400px;

    width: 100%;

    filter: blur(150px);
    transform: rotate(-20.37deg);

    background: linear-gradient(207.77deg,
        rgba(102, 113, 133, 0.4) 1.9%,
        rgba(43, 139, 229, 0.4) 37.15%,
        rgba(54, 72, 169, 0.4) 100.9%);
`