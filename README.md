# bywin 组件库

## 开发
### 拉取代码
```
$ git clone https://github.com/wangxiaogang94/bywin-desgin.git
```
### 运行
```bash
$ cnpm i
$ npm start
```
### 打包 
```bash
$ npm run build:commonjs
$ npm run build:esm
$ npm run copy-css:esm
$ npm run copy-css:lib
```

### 发布

```bash
$ npm publish
```

### 开发

/src/components // 这里是开发的组件
/src/page // 这里是demo和文档

## 使用


### 安装

```bash
$ npm install watermelon-design --save
```

```bash
$ yarn add watermelon-design
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

### 文档

[详细文档](https://wangxiaogang94.github.io/watermelon-design/build/index.html)。
================================================
#### 上传的图片文件转base64
```
import { fileToBase64 } from 'watermelon-design';
// 在antd的upload的beforeUpload中使用 可以完成前端获取上传图片
const image = fileToBase64(file, (base64)=>{
    console.log(base64);
})
```
#### 水印
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

#### 颜色选择器 

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

#### 扇形菜单

##### API

属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| top | 中心点的y | number | 350 | 1.0.10 |
| left | 中心点的x | number | 350 | 1.0.10 |
| show | 是否显示菜单 | boolean | true | 1.0.10 |
| menu | 菜单项 | ReactNode[] | [] | 1.0.10 |
| centerButton | 中心按钮 | `string/ReactNode` | | 1.0.10 |
| centerClick | 中心按钮点击事件 | function | | 1.0.10 |
| centerBackground | 中心按钮背景 | string | #fd485e | 1.0.10 |

menu的子属性

| 属性 | 说明 | 类型 | 默认值 | 版本 | 说明 |
| --- | --- | --- | --- | --- |
| icon | 图标 | ReactNode | | 1.0.10 | |
| text | 文字 | `string/ReactNode` | | 1.0.10 | |
| onClick | 点击事件 | function | | 1.0.10 | |
| className | 自定义样式class名 | string | | 1.0.10 | 

##### 示例

```jsx
import { CircleMenu } from 'watermelon-design';


export default class menu extends React.Component {
    render() {
        const props = {
            top: 150, // 中心点的y
            left: 350, // 中心点的x
            show: true, // 是否显示菜单
            menu: [
                {
                    icon: <Icon type="plus-circle" />,
                    text: '拓展',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="plus" />,
                    text: '新增',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="fullscreen" />,
                    text: '全屏',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="fullscreen-exit" />,
                    text: '收回',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="form" />,
                    text: '编辑',
                    onClick: i => console.log(i),
                },
                {
                    icon: <Icon type="qq" />,
                    text: 'qq',
                    onClick: i => console.log(i),
                },
            ],
            centerButton: (
                <span>
                    <Icon type="plus-circle" />
                    点击
                </span>
            ),
            centerClick: () => {},
            centerBackground: 'blue',
        };
        return (
            <div>
                <CircleMenu {...props}/>
            </div>
        );
    }
}

```