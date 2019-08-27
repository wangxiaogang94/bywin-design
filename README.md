# 个人使用的组件库

[详细文档](https://wangxiaogang94.github.io/watermelon-design/build/index.html)。
================================================
## 上传的图片文件转base64
```
import { fileToBase64 } from 'watermelon-design';
// 在antd的upload的beforeUpload中使用 可以完成前端获取上传图片
const image = fileToBase64(file, (base64)=>{
    console.log(base64);
})
```
## 水印
> - text:
>   > - Type:String
>   > - 
> - isWatermark:
>   > - Type:bool
>   > - Default: false
> - angle:
>   > - Type:number
>   > - Default: -30
```
import { WaterMark } from 'watermelon-design';

const a = () => <WaterMark text={'admin'} isWatermark/>
```

## 颜色选择器 

```jsx
import { ColorPicker } from 'watermelon-design';

export default class colorpicker extends React.Component {
    state = {
        color: '#F5222D'
    }
    render() {

        return(
            <div>
                <h2>颜色选择器</h2>
                <ColorPicker
                    type="sketch"
                    small
                    color={this.state.color}
                    position="bottom"
                    presetColors={[
                        '#F5222D',
                        '#FA541C',
                        '#FA8C16',
                        '#FAAD14',
                        '#FADB14',
                        '#A0D911',
                        '#52C41A',
                        '#13C2C2',
                        '#1890FF',
                        '#2F54EB',
                        '#722ED1',
                        '#EB2F96',
                    ]}
                    onChangeComplete={(color)=>this.setState({color})}
                />
            </div>
        );
    }
}

```