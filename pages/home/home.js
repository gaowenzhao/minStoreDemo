// miniprogram/pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabList: [
            {name: '推荐', isActive: true, articleType: -1, orderByType: -1},
            {name: '最新', isActive: false, articleType: -1, orderByType: 1},
            {name: '最热', isActive: false, articleType: -1, orderByType: 2},
            {name: '图文', isActive: false, articleType: 1, orderByType: -1},
            {name: '视频', isActive: false, articleType: 2, orderByType: -1}
        ],
        imageList: [
            'https://pub-img.perfectdiary.com/material/image/2020/05/3a8f56fe0da048e185834c610f6c539c.gif',
            'https://pub-img.perfectdiary.com/material/image/2020/05/45a27f5c22f546ad99d734fbe57678e8.gif',
            'https://pub-img.perfectdiary.com/material/image/2020/05/68ccafa217a34379b628f1e6cfe60fe5.jpg',
            'https://pub-img.perfectdiary.com/material/image/2020/05/a4cf10c544d14459b2b74d3d9fbb283b.jpg'
        ],
        productList:[{
            id: 523037122979813,
            likeRelationId: null,
            creatorId: 765,
            articleTitle: "\uD83C\uDF81送锦鲤盘丨新品来啦！动物眼影新成员——锦鲤盘抢先看！",
            articleType: 1,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/fafd7fde762446dfb0eea64a7368e231.jpg?w=500&h=400",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/21950154073f41caba148096fbef1dbd.jpg?w=750&h=1000",
            gifUrl: "",
            likeCount: 659,
            readCount: 24986,
            sortTop: 1,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: null,
                nickName: "小完子",
                avatarUrl: "https://pub-img.perfectdiary.com/material/image/2020/03/ec76513615e0478586549e11b57c1a76.png"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 523045712928191,
            likeRelationId: null,
            creatorId: 764,
            articleTitle: "眼小眼大都无神？3步教你练出迷人漫画眼！",
            articleType: 1,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/0f1add631c954d43a1f1342ae620cb5d.jpg?w=500&h=400",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/c69ffb29902f4e01bd26b34a6181438b.jpg?w=750&h=1000",
            gifUrl: "",
            likeCount: 299,
            readCount: 30311,
            sortTop: 1,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: null,
                nickName: "小完子",
                avatarUrl: "https://pub-img.perfectdiary.com/material/image/2020/03/ec76513615e0478586549e11b57c1a76.png"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 523048665714981,
            likeRelationId: null,
            creatorId: 7459559356811339,
            articleTitle: "\uD83C\uDF1F黑白双煞！我不允许有人还不知道这个神奇宝贝\uD83D\uDE4B‍♀️！#学生党必备#黑白眼膜#眼膜#赠品#",
            articleType: 6,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/066a5508f0504aa19c9b81cb9361f220.jpg?w=500&h=400",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/029beca3fb6f4d3b9ebbd1ed27a857b6.jpg?w=1080&h=1439",
            gifUrl: "",
            likeCount: 11,
            readCount: 109,
            sortTop: 2,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: 7459559356811339,
                nickName: "护肤完",
                avatarUrl: "https://perfectdiary-public.oss-cn-shenzhen.aliyuncs.com/comment/2020/04/image/2020/04/4f5408e5ae5542fc8bc496f68b431959.jpg"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 8999361776571923,
            likeRelationId: null,
            creatorId: 7459559356811339,
            articleTitle: "6款热门面膜功课，2分钟教你怎么挑！#面膜怎么选#神经酰胺面膜#酵母肌护面膜#烟酰胺面膜#熊果苷面膜#黑白眼膜#高山茶焕活面膜#",
            articleType: 6,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/4c9a78d056334cccbe945cbb58b5da6a.jpg?w=500&h=400",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/bcd4d1bf028d4a25a89fd5fa61f14f44.jpg?w=750&h=1000",
            gifUrl: "",
            likeCount: 22,
            readCount: 496,
            sortTop: 2,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: 7459559356811339,
                nickName: "护肤完",
                avatarUrl: "https://perfectdiary-public.oss-cn-shenzhen.aliyuncs.com/comment/2020/04/image/2020/04/4f5408e5ae5542fc8bc496f68b431959.jpg"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 8999360434393876,
            likeRelationId: null,
            creatorId: 7165052374561795,
            articleTitle: "敲好看的7系列哑光唇釉全试色，All in的快落！\uD83D\uDC83\uD83D\uDC83#完美日记唇釉#试色合辑#雾面#全系列#色号#雾色梦境",
            articleType: 6,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/ffb8900b88df4a02a2542a27f958af9c.jpg?w=2084&h=1667",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/7019e2e4b7ab4abe9cf59c19ad5252cd.jpg?w=3126&h=4167",
            gifUrl: "",
            likeCount: 15,
            readCount: 664,
            sortTop: 2,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: 7165052374561795,
                nickName: "彩妆完",
                avatarUrl: "https://perfectdiary-public.oss-cn-shenzhen.aliyuncs.com/comment/2020/05/image/2020/05/c62a35e99a414b6488bb26bbaf133125.jpg"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 8976628783102128,
            likeRelationId: null,
            creatorId: 7459804706826358,
            articleTitle: "薄荷绿的居家魔法⭐衣服瞬间平整的神器\uD83E\uDD70 #科西挂烫机  #挂烫机 #熨斗 #熨衣服 #居家好物 #出差必备 #旅行必备",
            articleType: 6,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/aeba739926b547a2aabdc4965c7d9d10.png?w=2705&h=3606",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/df556bdc993a4d6d8780e96590babb04.png?w=1200&h=1598",
            gifUrl: "",
            likeCount: 48,
            readCount: 3690,
            sortTop: 2,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: 7459804706826358,
                nickName: "分享完",
                avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/F7eoO2QJaKXyJ5ewPXgI0XTlfhhtXVbeicZqANCmn2uqOwGicGKygJgbPKX6UFqqMBf2F41rQ4LUbgxBZwzdXegw/132"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 8976628246229149,
            likeRelationId: null,
            creatorId: 7165052374561795,
            articleTitle: "新品预告❗十二色眼影锦鲤盘，承包你所有的好运气！",
            articleType: 6,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/98d7caf5b18a4dcdaf624904cc8fa8e1.jpg?w=500&h=400",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/e78b63798a474802b8119e96aeb99c76.jpg?w=750&h=1000",
            gifUrl: "",
            likeCount: 415,
            readCount: 7512,
            sortTop: 2,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: 7165052374561795,
                nickName: "彩妆完",
                avatarUrl: "https://perfectdiary-public.oss-cn-shenzhen.aliyuncs.com/comment/2020/05/image/2020/05/c62a35e99a414b6488bb26bbaf133125.jpg"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 8976624756568903,
            likeRelationId: null,
            creatorId: 2325,
            articleTitle: "3步快速美白肌肤，晒黑也能快速白回来",
            articleType: 1,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/de003eeaa68a453da735314ef9974189.jpg?w=500&h=400",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/4db99df7a2614bb0b21a409d40926aa9.jpg?w=750&h=1000",
            gifUrl: "",
            likeCount: 194,
            readCount: 29220,
            sortTop: 2,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: null,
                nickName: "小完子",
                avatarUrl: "https://pub-img.perfectdiary.com/material/image/2020/03/ec76513615e0478586549e11b57c1a76.png"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 8976575901313452,
            likeRelationId: null,
            creatorId: 7964368875621678,
            articleTitle: "夏日美甲集合✨神仙颜色搭配也太太清爽❄️了吧~",
            articleType: 6,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/4149e9afe4b941618aa8f7b01b9bf39c.jpg?w=400&h=300",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/be0237e103844a0b9917411dbbc85e4f.jpg?w=750&h=1000",
            gifUrl: "",
            likeCount: 73,
            readCount: 1868,
            sortTop: 2,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: 7964368875621678,
                nickName: "美甲完\uD83D\uDC85",
                avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/qkTSdX2F1kics9aQun3INIJ8qickJcjBGTHHmibK7K4Z19oU4RSVvGiaQ34icFyavv96SgLibgD0ef7sRv1Yu4uFyibIw/132"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }, {
            id: 8893716586764418,
            likeRelationId: null,
            creatorId: 7165052374561795,
            articleTitle: "​不同脸型的眉毛画法，画对显脸小！\uD83E\uDD29#画眉#眉形画法#脸型#眉形#干货#眉毛怎么画",
            articleType: 6,
            coverImg: "https://pub-img.perfectdiary.com/material/image/2020/05/81e505e1267b4909aeb08f0520dcd046.jpg?w=2084&h=1667",
            status: 4,
            banner: "https://pub-img.perfectdiary.com/material/image/2020/05/f03758c72e1c4c98a4f4e1e31d156bc9.jpg?w=3126&h=4167",
            gifUrl: "",
            likeCount: 21,
            readCount: 876,
            sortTop: 2,
            tagList: null,
            categoryIds: null,
            authorVO: {
                userId: 7165052374561795,
                nickName: "彩妆完",
                avatarUrl: "https://perfectdiary-public.oss-cn-shenzhen.aliyuncs.com/comment/2020/05/image/2020/05/c62a35e99a414b6488bb26bbaf133125.jpg"
            },
            rejectionReason: null,
            rejectionTime: null,
            isLike: 0,
            topicId: null
        }],
        selectIndex: 0,
        bannerSelect:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("tabList", this.data.tabList);
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    selectTab(ev) {
        this.data.selectIndex = ev.target.id
        this.setData({
            selectIndex: this.data.selectIndex
        })
    },
    swiperChange(ev){
        console.log('ev.detail',ev.detail);
           this.data.bannerSelect = ev.detail.current
           this.setData({
               bannerSelect:ev.detail.current
           })
    }
})