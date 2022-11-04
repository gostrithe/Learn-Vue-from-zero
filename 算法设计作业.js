// const tree = [];
// for (let i = 0; i < 5; i++) {
//     tree[i] = [];
// }
// let count = 0; // 统计计算次数

// tree[0][0] = 9;
// tree[1][0] = 4; tree[1][1] = 7;
// tree[2][0] = 5; tree[2][1] = 3; tree[2][2] = 1;
// tree[3][0] = 2; tree[3][1] = 4; tree[3][2] = 4; tree[3][3] = 1;
// tree[4][0] = 7; tree[4][1] = 5; tree[4][2] = 3; tree[4][3] = 2; tree[4][4] = 4;

const tree = [  // 数据结构

           [6],
         [11, 5],
        [6, 7, 12],
      [2, 18, 13, 5],
    [20, 3, 11, 8, 14]

];

function greedy(tree) {
    console.log('题目数据:', tree);
    console.log('');
    let temp = tree[tree.length - 1];  // 存放节点标记 [20, 3, 11, 8, 14]
    let count = 0;  // 计算的次数
    
    for (let i = tree.length - 2; i >= 0; i--) {
        console.log('最终值标记:', temp);
        for (let j = 0; j <= i; j++) {
            count++;
            temp[j] = tree[i][j] + Math.max(temp[j], temp[j + 1]); 
        }
        temp.pop()
    }
    console.log('最终值标记:', temp);
    console.log('');
    console.log(`一共计算了${count}次`);
    return temp[0];
}
console.log('最终结果:', greedy(tree));

