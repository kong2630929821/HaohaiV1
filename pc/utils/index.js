//日期格式
function formatDate(dateStr,lang="zh-CN"){
    if(!dateStr) return null;
    let arr = dateStr.split("-");
    const date = new Date(arr[0],arr[1],arr[2]);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const ret = lang === 'zh-CN' ? `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日` : `${months[date.getMonth() - 1]} ${date.getDate()}, ${date.getFullYear()}`;
    return ret
}

//日期排序
function sortByDate(taxInfos){
    for(let i = 0; i < taxInfos.length; i++){
        for(let j = 0; j < taxInfos.length - i - 1; j++){
            let time1 = new Date(taxInfos[j].date).getTime();
            let time2 = new Date(taxInfos[j+1].date).getTime();
            if(time1 < time2){
                let tmp = taxInfos[j];
                taxInfos[j] = taxInfos[j+1];
                taxInfos[j+1] = tmp;
            }
        }
    }
    return taxInfos;
}

export  {
    formatDate,
    sortByDate
}