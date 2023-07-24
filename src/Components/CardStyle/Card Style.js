import {styled} from "styled-components";


export const StyledCard = styled.div`
.card{
    width: 540px;
    height: 230px;
    flex-shrink: 0;

    border-radius: 2px;
    border: 1px solid rgba(151, 151, 151, 0.18);
    margin-left: 128px;
    margin-top: 30px;
}

.card__df{
    display: flex;
}

.pizza{
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    margin: 30px 0 0 30px;
}

.fire__backround{
    position: absolute;
    width: 50px;
    height: 50px;
    flex-shrink: 0;

    border-radius: 25px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 7px 40px 0px rgba(238, 39, 68, 0.36);
    backdrop-filter: blur(4.077422618865967px);
    margin-left: 30px;
    margin-top: 30px;
}

.imgg{
    margin-left: 15px;
    margin-top: 15px;
}

.pizza_name{
    color: #222124;
    font-family: 'Inter-Medium';
    font-size: 24px;
    font-weight: 500;
    margin-top: 15px;
}

.pizza_about{
    color: #222124;
    font-family: 'Inter-Regular';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 212px;
    height: 68px;
}

.narx__df{
    display: flex;
}

.pizza_narx{
    color: #222124;
    font-family: 'Inter-Bold';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.plus__button{
    margin-left: 67px;
    border: 0;
    margin-top: -10px;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 80px;
    background: #F1B301;
}

.img__plus{
    width: 24px;
    height: 24px;
}
                             `;

