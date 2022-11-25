import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux"

function Mylistcount()
{
    let data = useSelector((state) => { return state } )
    return(
        <div>
            <table className='table3'>
                <tr>
                    <td colSpan={7}><h6 className='l_title'>{data.soonend[0]}</h6></td>
                </tr>
                <tr>
                    <td colSpan={7}><h4 className='h4_t'>{data.soonend[1]}</h4></td>
                </tr>
                <tr>
                    <td>대기</td>
                    <td><span>|</span></td>
                    <td>7일 전</td>
                    <td><span>|</span></td>
                    <td>3일 전</td>
                    <td><span>|</span></td>
                    <td>하루 전</td>
                </tr>
                <tr>
                    <td><span className='text_color1'>{data.soonend[2]}</span></td>
                    <td><span></span></td>
                    <td><span className='text_color2'>{data.soonend[3]}</span></td>
                    <td><span></span></td>
                    <td><span className='text_color3'>{data.soonend[4]}</span></td>
                    <td><span></span></td>
                    <td><span className='text_color4'>{data.soonend[5]}</span></td>
                </tr>
            </table>
            

            <table className='table4'>
                <tr>
                    <td colSpan={7}><h6 className='l_title'>{data.hurrysr[0]}</h6></td>
                </tr>
                <tr>
                    <td colSpan={7}><h4 className='h4_t'>{data.hurrysr[1]}</h4></td>
                </tr>
                <tr>
                    <td>배포완료</td>
                    <td><span>|</span></td>
                    <td>개발완료</td>
                    <td><span>|</span></td>
                    <td>개발진행</td>
                    <td><span>|</span></td>
                    <td>요청대기</td>
                </tr>
                <tr>
                    <td><span className='text_color1'>{data.hurrysr[2]}</span></td>
                    <td><span></span></td>
                    <td><span className='text_color2'>{data.hurrysr[3]}</span></td>
                    <td><span></span></td>
                    <td><span className='text_color3'>{data.hurrysr[4]}</span></td>
                    <td><span></span></td>
                    <td><span className='text_color4'>{data.hurrysr[5]}</span></td>
                </tr>
            </table>
        </div>
    )
};

export default Mylistcount;