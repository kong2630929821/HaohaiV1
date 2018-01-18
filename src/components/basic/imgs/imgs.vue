<template>
        <img :style="sizeSty" :src="pictrue" alt="">
</template>

<script>
    const getImg = src => {
        // webpack有特殊规则，require不能直接引用一个变量，但特殊的写法就能引用变量。
        // 一个图片如果require就能被webpack追踪到，就能编译hash
        if (src.match(/(\.jpg|\.png)/g) == null) {
            src = src + ".png";
        }
        return require("../../../res/" + src);
    };

    export default {
        name: "imgs",
        props: {
            src: {
                type: String,
                default: ""
            },
            size: {
                type: String,
                default: "auto"
            }
        },
        computed: {
            pictrue() {
                const pic = getImg(this.src);
                return pic;
            },
            sizeSty() {
                let result = {};
                if (this.size != "auto") {
                    if (!this.size.includes(";")) {
                        result = {
                            width: this.size,
                            height: this.size
                        };
                    } else {
                        result = {
                            width: this.size.split(";")[0],
                            height: this.size.split(";")[1]
                        };
                    }
                }
                return result;
            }
        }
    };
</script>