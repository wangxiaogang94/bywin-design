
/**
 * 判断一个点是否在多边形中
 * @param {*} points 多边形的点 [[x,y],[x1,y2]]
 * @param {*} point 需要判断的点 [x,y]
 */
export const containsPointInPolygonByXY = (points, point) => {
    try {
      const { length } = points;
      let c = false;
      for (let i = 0, j = length - 1; i < length;) {
        if (
          (points[i][1] > point[1]) !== (points[j][1] > point[1])
          && point[0]
            < ((points[j][0] - points[i][0]) * (point[1] - points[i][1]))
              / (points[j][1] - points[i][1])
              + points[i][0]
        ) {
          c = !c;
        }
        j = i;
        i += 1;
      }
      return c;
    } catch (error) {
      console.error('判断点是否在多边形内报错', error);
      return null;
    }
  };

export default {
    containsPointInPolygonByXY
};
