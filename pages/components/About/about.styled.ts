import styled from "styled-components";

const AboutWrapper = styled.div`
    justify-content: flex-start;
    position: relative;
    .content{
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .intro-self{
        width: 40%;
        .title{
            font-size: 5rem;
        }
    }

    .avatar{
        width: 40%;
        img{
            width: 100%;
            height: auto;
        }
    }
`;

export default AboutWrapper;