/**
 *  判断一个点是否在多边形内部
 *  @param points 多边形坐标集合
 *  @param testPoint 测试点坐标
 *  返回true为真，false为假
 *  */
function insidePolygon(points, testPoint) {
  let x = testPoint[0],
    y = testPoint[1];
  let inside = false;
  for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
    let xi = points[i][0],
      yi = points[i][1];
    let xj = points[j][0],
      yj = points[j][1];

    let intersect = yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}
