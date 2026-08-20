# Museum Wayang：核验记录

本文件是实现前的内部事实与素材记录；访客页面将仅呈现印尼语与英语内容。

| 主题 | 已核验内容 | 来源 | 页面使用方式 |
| --- | --- | --- | --- |
| 准确景点 | 用户提供的地图地址 `Jl. Pintu Besar Utara No. 27` 对应雅加达 Kota Tua 的 Museum Wayang（木偶博物馆）。 | 用户所给地图嵌入的地点标识；Museum Wayang 机构页 | 全站实体名称、地图和 JSON-LD |
| 建筑历程 | 机构页列出：1640 年教堂、1732 年重建为 de Nieuw Holandsche Kerk、1939 年成为 Oude Bataviasche Museum、1975 年正式成为 Museum Wayang。 | https://mitramuseumjakarta.id/wayang | 历史时间线 |
| 馆藏与定位 | 机构页列出约 5,373 件馆藏；Google Arts & Culture 说明博物馆收藏各类 wayang，也展示来自马来西亚、泰国、中国、越南、法国、印度等地的木偶与人偶。 | https://mitramuseumjakarta.id/wayang；https://artsandculture.google.com/story/virtual-tour-of-museum-wayang-unit-pengelola-museum-seni/xgWx-GlujogWIA?hl=en | “为什么值得看”与馆藏说明 |
| 文化背景 | Google Arts & Culture 说明 wayang 可指木偶或真人舞者的戏剧表演；皮影戏通常伴随爪哇甘美兰。其页面援引 UNESCO 于 2003 年给予 wayang kulit 的遗产认可。 | Google Arts & Culture 虚拟导览 | 科普段落，不扩展为未核实的表演排期 |
| 参观时间 | 机构页列为周二至周日 09:00–17:00。 | Museum Wayang 机构页 | 实用参观区；提示以现场/机构公告为准 |
| 费用 | 机构页列出的地方条例收费为成人 Rp5.000、大学生 Rp3.000、儿童/学生 Rp2.000，团体有对应价格。 | Museum Wayang 机构页 | 费用区；清楚提示可能调整 |
| 到达与停车 | 机构页列出 Jakarta Kota 站步行约 300m、Transjakarta Jakarta Kota 站步行约 500m、Kali Besar Barat 站约 230m；停车在 Jalan Cengkeh 与 Kali Besar 区域。 | Museum Wayang 机构页 | 交通和停车区；注明距离为机构公开参考 |
| 设施与无障碍 | 机构页列出空调、洗手间、祈祷室、表演空间、导览；入口坡道尚未配置，馆内有通向二层的替代动线，且不提供轮椅借用。 | Museum Wayang 机构页 | 设施、无障碍和出行准备区 |
| 外观实景图片 | `Museum Wayang, Jakarta (2025) - img 01.jpg`：作者 Chainwit.，CC BY 4.0，拍摄于 2025 年 5 月 6 日。 | https://commons.wikimedia.org/wiki/File:Museum_Wayang,_Jakarta_(2025)_-_img_01.jpg | 真实外观主图；页面附署名、许可链接与不改动说明 |
| 立面实景图片 | `Museum Wayang, Jakarta (2025) - img 02.jpg`：作者 Chainwit.，CC BY 4.0。 | https://commons.wikimedia.org/wiki/File:Museum_Wayang,_Jakarta_(2025)_-_img_02.jpg | 图库中的建筑细节图；页面附署名与许可链接 |
| 馆藏实景图片 | `Wayang Kulit - Museum Wayang 01.jpg`：作者 Amelia guo，CC BY 3.0 Unported，画面为馆内展出的皮影剪影。 | https://commons.wikimedia.org/wiki/File:Wayang_Kulit_-_Museum_Wayang_01.jpg | 图库中的馆藏实景图；页面附署名与许可链接 |

## 实施边界

1. 所有票价、开放日、设施、交通与停车为参观参考，页面须提示出发前再次核实。
2. 周边餐饮、住宿、零售、加油/充电仅介绍类型和规划原则，绝不推荐具体商户。
3. CC BY 图像在页面图片说明或页脚中完成作者、来源和许可归属。
4. Google 地图嵌入改用印尼语参数（`hl=id` 与 `!1sid`），不保留中文或日语参数。
5. JSON-LD 评分字段使用检索时可见的 Google 公开汇总（4.5 / 5,073），标明为构建时观察值并避免在正文中夸大；正式出行建议仍以地图实时信息为准。
