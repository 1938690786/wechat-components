Component({
    properties: {
        /** 是否处于加载状态 */
        loading: {
            type: Boolean,
            value: true
        },
        /** 是否已加载完成 */
        finished: {
            type: Boolean,
            value: false
        },
        loadingText: {
            type: String,
            value: "加载中..."
        },
        /** 加载完成后的提示文案 */
        finishedText: {
            type: String,
            value: "没有更多数据了"
        }
    }
});
