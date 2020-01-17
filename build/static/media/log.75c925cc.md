## 判断一个点是否在多边形中

### 参数
 points(Array)：多边形的点
 point(Array)：需要判断的点

### 返回
 (bool):是否在多边形中
```
import { mapUtils } from 'bywin-design';

const points = [[120,30], [121,31], [121,29]]; // 多边形
const point = [120,29];

const isInPolygon = mapUtils.containsPointInPolygonByXY(points,point);
```