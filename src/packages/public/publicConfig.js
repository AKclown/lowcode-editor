const getUUID = (randomLength = 10) => {
    return 'id_' + Number(Math.random().toString().substring(2, randomLength) + Date.now()).toString(36)
}

export class PublicConfigClass {
    // 版本号   
    version = '1.0.0';
    // 题目ID
    id = getUUID();
    // 题目序号
    quesNo = '';
    // 学段列表
    sectionCodes = [];
    // 年级
    gradeCode = '';
    // 题目内容
    title = '';
    // 题目编码
    quesCode = '';
    // 题目类型编码
    quesTypeCode = '';
    // 题目类型别名
    quesTypeAlias = '';
    // 父题编码
    materialCode = '';
    // 测试类型编码
    paperCode = '';
    // 测试类型
    paperType = '';
    // 学科编码
    subjectCode = '';
    // 难度系数
    difficultyCoefficient = '';
    // 题目内容
    quesContent = '';
    // 答案总述
    answerSummary = '';
    // 是否是锚题
    anchor = 0;
    // 是否是量表
    scale = 0;
    // 是否是富文本
    richText = 0;
    // 是否隐藏
    hidden = 0;
    // 题目是否必做
    required = 0;
    // 每行显示选项数量
    maxRow = null;
    // 最小选项个数，0表示不限制
    minLength = null;
    // 最大选项个数，0表示不限制
    maxLength = null;
    // 校验类型
    validate = '';
    // 身份代码
    identityCode = '';
    // 音频可播放次数
    maxPlayCount = null;
    // 子题每行显示题数
    subQuesPerLine = null;
    // 子题排序
    subQuesSort = null;
    // 子题关联信息
    subQuesRelatedInfo = null;
    // 关联题目编码，多个以逗号分隔
    relatedQuesCodes = null;
    // 答题卡内容
    answerSheetContent = null;
    // 题目属性Json
    quesProperties = null;
    // 选项列表
    options = [];
    // 文件列表
    fsseQuesFiles = [];
    // 子题列表
    subQues = [];


}