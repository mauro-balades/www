import Slider from 'react-rangeslider';
import { Link } from 'react-router-dom';
import { Wrapper, Text, BigRedText } from './styles';
import Marquee from "react-fast-marquee";

export default ({ range }: any) => {

    switch (range) {

        case 0: {
            return (
                <Wrapper>
                    <Text>Dev.</Text>
                </Wrapper>
            )
        }

        case 10: {
            return (
                <Wrapper>
                    <Text>I am a software developer.</Text>
                </Wrapper>
            )
        }

        case 20: {
            return (
                <Wrapper>
                    <Text>I am a software developer with experience in software velopment and a passion for problem-solving.</Text>
                </Wrapper>
            )
        }

        case 30: {
            return (
                <Wrapper>
                    <Text>I am a software developer with expertise in various different programming languages. I have experience working on various projects and am skilled in web/software development. I enjoy collaborating with cross-functional teams and solving complex problems using technology.</Text>
                </Wrapper>
            )
        }

        case 40: {
            return (
                <Wrapper>
                    <Text>Hi, my name is Mauro Baladés and I am a software developer with tons years of experience in the field.<br /><br /> I have a strong background in languages such as; Pytohn, C++ and rust and have worked on a variety of projects, ranging from low-level programming to website development. I am always looking to learn and expand my knowledge in the field. I enjoy collaborating with cross-functional teams to deliver high-quality software solutions. I am passionate about using technology to solve complex problems and am excited to continue growing and learning as a software developer.</Text>
                </Wrapper>
            )
        }

        case 50: {
            return (
                <Wrapper>
                    <BigRedText>
                        <Link to="/contact">CONTACT ME - MAURO.BALADES@TUTANOTA.COM</Link>
                    </BigRedText>
                    <Text>Hi, my name is Mauro Baladés and I am a software developer with tons years of experience in the field.<br /><br /> I have a strong background in languages such as; Pytohn, C++ and rust and have worked on a variety of projects, ranging from low-level programming to website development. I am always looking to learn and expand my knowledge in the field. I enjoy collaborating with cross-functional teams to deliver high-quality software solutions. I am passionate about using technology to solve complex problems and am excited to continue growing and learning as a software developer.</Text>
                </Wrapper>
            )
        }

        case 60: {
            return (
                <Wrapper>
                    <BigRedText className="blink">
                        <Link to="/contact">CONTACT ME - MAURO.BALADES@TUTANOTA.COM</Link>
                    </BigRedText>
                    <Text>Hi, my name is Mauro Baladés and I am a software developer with tons years of experience in the field.<br /><br /> I have a strong background in languages such as; Pytohn, C++ and rust and have worked on a variety of projects, ranging from low-level programming to website development. I am always looking to learn and expand my knowledge in the field. I enjoy collaborating with cross-functional teams to deliver high-quality software solutions. I am passionate about using technology to solve complex problems and am excited to continue growing and learning as a software developer.</Text>
                </Wrapper>
            )
        }

        case 70: {
            return (
                <>
                    <Marquee speed={1000} pauseOnHover={true} gradient={false} style={{ zIndex: '2', fontSize: '60px', position: 'absolute', top: '35%', left: '0', width: '100%', background: 'red' }}>
                        CONTACT ME - github.com/mauro-balades
                    </Marquee>
                    <Wrapper>
                        <BigRedText className="blink">
                            <Link to="/contact">CONTACT ME - MAURO.BALADES@TUTANOTA.COM</Link>
                        </BigRedText>
                        <Text>Hi, my name is Mauro Baladés and I am a software developer with tons years of experience in the field.<br /><br /> I have a strong background in languages such as; Pytohn, C++ and rust and have worked on a variety of projects, ranging from low-level programming to website development. I am always looking to learn and expand my knowledge in the field. I enjoy collaborating with cross-functional teams to deliver high-quality software solutions. I am passionate about using technology to solve complex problems and am excited to continue growing and learning as a software developer.</Text>
                    </Wrapper>
                </>
            )
        }

        case 80: {
            return (
                <Wrapper>
                    <Text>A software dev.</Text>
                </Wrapper>
            )
        }

        case 90: {
            return (
                <Wrapper>
                    <Text>A software dev.</Text>
                </Wrapper>
            )
        }

        case 100: {
            return (
                <Wrapper>
                    <Text>A software dev.</Text>
                </Wrapper>
            )
        }
    }

    return (
        <Wrapper>
            <Text>Less advertisement</Text>
        </Wrapper>
    )
}
