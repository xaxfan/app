// drawings.js - All drawing data with categories
const CATEGORIES = [
  {
    "id": "animals",
    "name": "动物",
    "emoji": "🐾",
    "drawings": [
      {
        "id": "rat",
        "name": "小老鼠",
        "emoji": "🐭",
        "steps": [
          {
            "label": "头",
            "svg": "svg/rat/step1_头.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/rat/step2_耳朵.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/rat/step3_眼睛.svg"
          },
          {
            "label": "鼻子嘴巴",
            "svg": "svg/rat/step4_鼻子嘴巴.svg"
          },
          {
            "label": "胡须",
            "svg": "svg/rat/step5_胡须.svg"
          },
          {
            "label": "身体",
            "svg": "svg/rat/step6_身体.svg"
          },
          {
            "label": "尾巴",
            "svg": "svg/rat/step7_尾巴.svg"
          }
        ]
      },
      {
        "id": "ox",
        "name": "小牛",
        "emoji": "🐮",
        "steps": [
          {
            "label": "头",
            "svg": "svg/ox/step1_头.svg"
          },
          {
            "label": "角",
            "svg": "svg/ox/step2_角.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/ox/step3_眼睛.svg"
          },
          {
            "label": "鼻子",
            "svg": "svg/ox/step4_鼻子.svg"
          },
          {
            "label": "身体",
            "svg": "svg/ox/step5_身体.svg"
          },
          {
            "label": "尾巴",
            "svg": "svg/ox/step6_尾巴.svg"
          }
        ]
      },
      {
        "id": "tiger",
        "name": "小老虎",
        "emoji": "🐯",
        "steps": [
          {
            "label": "头",
            "svg": "svg/tiger/step1_头.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/tiger/step2_耳朵.svg"
          },
          {
            "label": "王字",
            "svg": "svg/tiger/step3_王字.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/tiger/step4_眼睛.svg"
          },
          {
            "label": "鼻子嘴巴",
            "svg": "svg/tiger/step5_鼻子嘴巴.svg"
          },
          {
            "label": "斑纹",
            "svg": "svg/tiger/step6_斑纹.svg"
          },
          {
            "label": "身体",
            "svg": "svg/tiger/step7_身体.svg"
          },
          {
            "label": "尾巴",
            "svg": "svg/tiger/step8_尾巴.svg"
          }
        ]
      },
      {
        "id": "rabbit",
        "name": "小兔子",
        "emoji": "🐰",
        "steps": [
          {
            "label": "头",
            "svg": "svg/rabbit/step1_头.svg"
          },
          {
            "label": "左耳",
            "svg": "svg/rabbit/step2_左耳.svg"
          },
          {
            "label": "右耳",
            "svg": "svg/rabbit/step3_右耳.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/rabbit/step4_眼睛.svg"
          },
          {
            "label": "鼻子嘴巴",
            "svg": "svg/rabbit/step5_鼻子嘴巴.svg"
          },
          {
            "label": "身体",
            "svg": "svg/rabbit/step6_身体.svg"
          },
          {
            "label": "短尾巴",
            "svg": "svg/rabbit/step7_短尾巴.svg"
          }
        ]
      },
      {
        "id": "dragon",
        "name": "小龙",
        "emoji": "🐲",
        "steps": [
          {
            "label": "头",
            "svg": "svg/dragon/step1_头.svg"
          },
          {
            "label": "角",
            "svg": "svg/dragon/step2_角.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/dragon/step3_眼睛.svg"
          },
          {
            "label": "鼻孔和嘴",
            "svg": "svg/dragon/step4_鼻孔和嘴.svg"
          },
          {
            "label": "小翅膀",
            "svg": "svg/dragon/step5_小翅膀.svg"
          },
          {
            "label": "身体",
            "svg": "svg/dragon/step6_身体.svg"
          },
          {
            "label": "尾巴",
            "svg": "svg/dragon/step7_尾巴.svg"
          }
        ]
      },
      {
        "id": "snake",
        "name": "小蛇",
        "emoji": "🐍",
        "steps": [
          {
            "label": "头",
            "svg": "svg/snake/step1_头.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/snake/step2_眼睛.svg"
          },
          {
            "label": "舌头",
            "svg": "svg/snake/step3_舌头.svg"
          },
          {
            "label": "嘴",
            "svg": "svg/snake/step4_嘴.svg"
          },
          {
            "label": "身体弯曲",
            "svg": "svg/snake/step5_身体弯曲.svg"
          },
          {
            "label": "花纹",
            "svg": "svg/snake/step6_花纹.svg"
          }
        ]
      },
      {
        "id": "horse",
        "name": "小马",
        "emoji": "🐴",
        "steps": [
          {
            "label": "头",
            "svg": "svg/horse/step1_头.svg"
          },
          {
            "label": "鬃毛",
            "svg": "svg/horse/step2_鬃毛.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/horse/step3_眼睛.svg"
          },
          {
            "label": "鼻子嘴巴",
            "svg": "svg/horse/step4_鼻子嘴巴.svg"
          },
          {
            "label": "身体",
            "svg": "svg/horse/step5_身体.svg"
          },
          {
            "label": "腿",
            "svg": "svg/horse/step6_腿.svg"
          },
          {
            "label": "尾巴",
            "svg": "svg/horse/step7_尾巴.svg"
          }
        ]
      },
      {
        "id": "sheep",
        "name": "小羊",
        "emoji": "🐑",
        "steps": [
          {
            "label": "头",
            "svg": "svg/sheep/step1_头.svg"
          },
          {
            "label": "卷毛",
            "svg": "svg/sheep/step2_卷毛.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/sheep/step3_眼睛.svg"
          },
          {
            "label": "嘴",
            "svg": "svg/sheep/step4_嘴.svg"
          },
          {
            "label": "云朵身体",
            "svg": "svg/sheep/step5_云朵身体.svg"
          },
          {
            "label": "腿",
            "svg": "svg/sheep/step6_腿.svg"
          }
        ]
      },
      {
        "id": "monkey",
        "name": "小猴子",
        "emoji": "🐵",
        "steps": [
          {
            "label": "头",
            "svg": "svg/monkey/step1_头.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/monkey/step2_耳朵.svg"
          },
          {
            "label": "脸部轮廓",
            "svg": "svg/monkey/step3_脸部轮廓.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/monkey/step4_眼睛.svg"
          },
          {
            "label": "鼻子嘴巴",
            "svg": "svg/monkey/step5_鼻子嘴巴.svg"
          },
          {
            "label": "身体",
            "svg": "svg/monkey/step6_身体.svg"
          },
          {
            "label": "尾巴",
            "svg": "svg/monkey/step7_尾巴.svg"
          }
        ]
      },
      {
        "id": "rooster",
        "name": "小鸡",
        "emoji": "🐔",
        "steps": [
          {
            "label": "头",
            "svg": "svg/rooster/step1_头.svg"
          },
          {
            "label": "鸡冠",
            "svg": "svg/rooster/step2_鸡冠.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/rooster/step3_眼睛.svg"
          },
          {
            "label": "嘴",
            "svg": "svg/rooster/step4_嘴.svg"
          },
          {
            "label": "肉垂",
            "svg": "svg/rooster/step5_肉垂.svg"
          },
          {
            "label": "身体",
            "svg": "svg/rooster/step6_身体.svg"
          },
          {
            "label": "翅膀",
            "svg": "svg/rooster/step7_翅膀.svg"
          },
          {
            "label": "腿和尾巴",
            "svg": "svg/rooster/step8_腿和尾巴.svg"
          }
        ]
      },
      {
        "id": "dog",
        "name": "小狗",
        "emoji": "🐶",
        "steps": [
          {
            "label": "头",
            "svg": "svg/dog/step1_头.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/dog/step2_耳朵.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/dog/step3_眼睛.svg"
          },
          {
            "label": "鼻子嘴巴",
            "svg": "svg/dog/step4_鼻子嘴巴.svg"
          },
          {
            "label": "身体",
            "svg": "svg/dog/step5_身体.svg"
          },
          {
            "label": "腿",
            "svg": "svg/dog/step6_腿.svg"
          },
          {
            "label": "尾巴",
            "svg": "svg/dog/step7_尾巴.svg"
          }
        ]
      },
      {
        "id": "pig",
        "name": "小猪",
        "emoji": "🐷",
        "steps": [
          {
            "label": "头",
            "svg": "svg/pig/step1_头.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/pig/step2_耳朵.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/pig/step3_眼睛.svg"
          },
          {
            "label": "猪鼻子",
            "svg": "svg/pig/step4_猪鼻子.svg"
          },
          {
            "label": "嘴",
            "svg": "svg/pig/step5_嘴.svg"
          },
          {
            "label": "身体",
            "svg": "svg/pig/step6_身体.svg"
          },
          {
            "label": "腿",
            "svg": "svg/pig/step7_腿.svg"
          },
          {
            "label": "卷尾巴",
            "svg": "svg/pig/step8_卷尾巴.svg"
          }
        ]
      },
      {
        "id": "cat",
        "name": "小猫",
        "emoji": "🐱",
        "steps": [
          {
            "label": "头",
            "svg": "svg/cat/step1_头.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/cat/step2_耳朵.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/cat/step3_眼睛.svg"
          },
          {
            "label": "鼻子嘴巴",
            "svg": "svg/cat/step4_鼻子嘴巴.svg"
          },
          {
            "label": "胡须",
            "svg": "svg/cat/step5_胡须.svg"
          },
          {
            "label": "身体",
            "svg": "svg/cat/step6_身体.svg"
          },
          {
            "label": "尾巴",
            "svg": "svg/cat/step7_尾巴.svg"
          }
        ]
      }
    ]
  },
  {
    "id": "labu",
    "name": "Labu风格",
    "emoji": "⭐",
    "drawings": [
      {
        "id": "labu_cat",
        "name": "猫咪",
        "emoji": "🐱",
        "steps": [
          {
            "label": "头",
            "svg": "svg/labu_cat/step1_head.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/labu_cat/step2_ears.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/labu_cat/step3_eyes.svg"
          },
          {
            "label": "鼻子和嘴",
            "svg": "svg/labu_cat/step4_nose_mouth.svg"
          },
          {
            "label": "胡子",
            "svg": "svg/labu_cat/step5_whiskers.svg"
          },
          {
            "label": "身体",
            "svg": "svg/labu_cat/step6_body.svg"
          }
        ]
      },
      {
        "id": "labu_bear",
        "name": "小熊",
        "emoji": "🐻",
        "steps": [
          {
            "label": "头",
            "svg": "svg/labu_bear/step1_head.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/labu_bear/step2_ears.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/labu_bear/step3_eyes.svg"
          },
          {
            "label": "鼻子和嘴",
            "svg": "svg/labu_bear/step4_nose_mouth.svg"
          },
          {
            "label": "蝴蝶结",
            "svg": "svg/labu_bear/step5_bowtie.svg"
          },
          {
            "label": "身体",
            "svg": "svg/labu_bear/step6_body.svg"
          }
        ]
      },
      {
        "id": "labu_dog",
        "name": "小狗",
        "emoji": "🐶",
        "steps": [
          {
            "label": "头",
            "svg": "svg/labu_dog/step1_head.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/labu_dog/step2_ears.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/labu_dog/step3_eyes.svg"
          },
          {
            "label": "鼻子和嘴",
            "svg": "svg/labu_dog/step4_nose_mouth.svg"
          },
          {
            "label": "胡须点",
            "svg": "svg/labu_dog/step5_dots.svg"
          },
          {
            "label": "身体",
            "svg": "svg/labu_dog/step6_body.svg"
          }
        ]
      },
      {
        "id": "labu_rabbit2",
        "name": "兔兔",
        "emoji": "🐰",
        "steps": [
          {
            "label": "头",
            "svg": "svg/labu_rabbit/step1_head.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/labu_rabbit/step2_ears.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/labu_rabbit/step3_eyes.svg"
          },
          {
            "label": "鼻子和嘴",
            "svg": "svg/labu_rabbit/step4_nose_mouth.svg"
          },
          {
            "label": "身体",
            "svg": "svg/labu_rabbit/step5_body.svg"
          }
        ]
      },
      {
        "id": "labu_sheep",
        "name": "小羊",
        "emoji": "🐑",
        "steps": [
          {
            "label": "头",
            "svg": "svg/labu_sheep/step1_head.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/labu_sheep/step2_ears.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/labu_sheep/step3_eyes.svg"
          },
          {
            "label": "鼻子和嘴",
            "svg": "svg/labu_sheep/step4_nose_mouth.svg"
          },
          {
            "label": "身体",
            "svg": "svg/labu_sheep/step5_body.svg"
          }
        ]
      },
      {
        "id": "labu_monkey",
        "name": "小猴",
        "emoji": "🐵",
        "steps": [
          {
            "label": "头",
            "svg": "svg/labu_monkey/step1_head.svg"
          },
          {
            "label": "耳朵",
            "svg": "svg/labu_monkey/step2_ears.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/labu_monkey/step3_eyes.svg"
          },
          {
            "label": "鼻子和嘴",
            "svg": "svg/labu_monkey/step4_nose_mouth.svg"
          },
          {
            "label": "身体",
            "svg": "svg/labu_monkey/step5_body.svg"
          }
        ]
      }
    ]
  },
  {
    "id": "scene",
    "name": "场景",
    "emoji": "🌳",
    "drawings": [
      {
        "id": "house",
        "name": "小房子",
        "emoji": "🏠",
        "steps": [
          {
            "label": "墙壁",
            "svg": "svg/house/step1_墙壁.svg"
          },
          {
            "label": "屋顶",
            "svg": "svg/house/step2_屋顶.svg"
          },
          {
            "label": "烟囱",
            "svg": "svg/house/step3_烟囱.svg"
          },
          {
            "label": "门",
            "svg": "svg/house/step4_门.svg"
          },
          {
            "label": "左窗",
            "svg": "svg/house/step5_左窗.svg"
          },
          {
            "label": "右窗",
            "svg": "svg/house/step6_右窗.svg"
          }
        ]
      },
      {
        "id": "tree",
        "name": "大树",
        "emoji": "🌳",
        "steps": [
          {
            "label": "树干",
            "svg": "svg/tree/step1_树干.svg"
          },
          {
            "label": "树根",
            "svg": "svg/tree/step2_树根.svg"
          },
          {
            "label": "树冠下层",
            "svg": "svg/tree/step3_树冠下层.svg"
          },
          {
            "label": "树冠上层",
            "svg": "svg/tree/step4_树冠上层.svg"
          },
          {
            "label": "树冠顶部",
            "svg": "svg/tree/step5_树冠顶部.svg"
          },
          {
            "label": "树洞",
            "svg": "svg/tree/step6_树洞.svg"
          }
        ]
      },
      {
        "id": "flower",
        "name": "小花",
        "emoji": "🌸",
        "steps": [
          {
            "label": "花茂",
            "svg": "svg/flower/step1_花茂.svg"
          },
          {
            "label": "叶子",
            "svg": "svg/flower/step2_叶子.svg"
          },
          {
            "label": "上花瓣",
            "svg": "svg/flower/step3_上花瓣.svg"
          },
          {
            "label": "左花瓣",
            "svg": "svg/flower/step4_左花瓣.svg"
          },
          {
            "label": "右花瓣",
            "svg": "svg/flower/step5_右花瓣.svg"
          },
          {
            "label": "花心",
            "svg": "svg/flower/step6_花心.svg"
          }
        ]
      },
      {
        "id": "grass",
        "name": "小草",
        "emoji": "🌿",
        "steps": [
          {
            "label": "地面",
            "svg": "svg/grass/step1_地面.svg"
          },
          {
            "label": "第一丛",
            "svg": "svg/grass/step2_第一丛.svg"
          },
          {
            "label": "第二丛",
            "svg": "svg/grass/step3_第二丛.svg"
          },
          {
            "label": "第三丛",
            "svg": "svg/grass/step4_第三丛.svg"
          },
          {
            "label": "小花点",
            "svg": "svg/grass/step5_小花点.svg"
          }
        ]
      },
      {
        "id": "sun",
        "name": "太阳",
        "emoji": "☀️",
        "steps": [
          {
            "label": "圆脸",
            "svg": "svg/sun/step1_圆脸.svg"
          },
          {
            "label": "上光芒",
            "svg": "svg/sun/step2_上光芒.svg"
          },
          {
            "label": "下光芒",
            "svg": "svg/sun/step3_下光芒.svg"
          },
          {
            "label": "左光芒",
            "svg": "svg/sun/step4_左光芒.svg"
          },
          {
            "label": "右光芒",
            "svg": "svg/sun/step5_右光芒.svg"
          },
          {
            "label": "笑脸",
            "svg": "svg/sun/step6_笑脸.svg"
          }
        ]
      },
      {
        "id": "cloud",
        "name": "云朵",
        "emoji": "☁️",
        "steps": [
          {
            "label": "主体",
            "svg": "svg/cloud/step1_主体.svg"
          },
          {
            "label": "内部线条",
            "svg": "svg/cloud/step2_内部线条.svg"
          },
          {
            "label": "眼睛",
            "svg": "svg/cloud/step3_眼睛.svg"
          },
          {
            "label": "嘴",
            "svg": "svg/cloud/step4_嘴.svg"
          }
        ]
      }
    ]
  },
  {
    "id": "shapes",
    "name": "形状",
    "emoji": "△",
    "drawings": [
      {
        "id": "square",
        "name": "正方形",
        "emoji": "■",
        "steps": [
          {
            "label": "左边",
            "paths": [
              {
                "type": "line",
                "x1": 75,
                "y1": 250,
                "x2": 75,
                "y2": 100
              }
            ]
          },
          {
            "label": "上边",
            "paths": [
              {
                "type": "line",
                "x1": 75,
                "y1": 100,
                "x2": 225,
                "y2": 100
              }
            ]
          },
          {
            "label": "右边",
            "paths": [
              {
                "type": "line",
                "x1": 225,
                "y1": 100,
                "x2": 225,
                "y2": 250
              }
            ]
          },
          {
            "label": "下边",
            "paths": [
              {
                "type": "line",
                "x1": 225,
                "y1": 250,
                "x2": 75,
                "y2": 250
              }
            ]
          }
        ]
      },
      {
        "id": "rectangle",
        "name": "长方形",
        "emoji": "▬",
        "steps": [
          {
            "label": "左边",
            "paths": [
              {
                "type": "line",
                "x1": 50,
                "y1": 220,
                "x2": 50,
                "y2": 130
              }
            ]
          },
          {
            "label": "上边",
            "paths": [
              {
                "type": "line",
                "x1": 50,
                "y1": 130,
                "x2": 250,
                "y2": 130
              }
            ]
          },
          {
            "label": "右边",
            "paths": [
              {
                "type": "line",
                "x1": 250,
                "y1": 130,
                "x2": 250,
                "y2": 220
              }
            ]
          },
          {
            "label": "下边",
            "paths": [
              {
                "type": "line",
                "x1": 250,
                "y1": 220,
                "x2": 50,
                "y2": 220
              }
            ]
          }
        ]
      },
      {
        "id": "triangle",
        "name": "三角形",
        "emoji": "△",
        "steps": [
          {
            "label": "左边",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 80,
                "x2": 60,
                "y2": 270
              }
            ]
          },
          {
            "label": "下边",
            "paths": [
              {
                "type": "line",
                "x1": 60,
                "y1": 270,
                "x2": 240,
                "y2": 270
              }
            ]
          },
          {
            "label": "右边",
            "paths": [
              {
                "type": "line",
                "x1": 240,
                "y1": 270,
                "x2": 150,
                "y2": 80
              }
            ]
          }
        ]
      },
      {
        "id": "circle_shape",
        "name": "圆形",
        "emoji": "○",
        "steps": [
          {
            "label": "圆",
            "paths": [
              {
                "type": "circle",
                "cx": 150,
                "cy": 175,
                "r": 80
              }
            ]
          }
        ]
      },
      {
        "id": "cube",
        "name": "立方体",
        "emoji": "📦",
        "steps": [
          {
            "label": "前面",
            "paths": [
              {
                "type": "path",
                "d": "M80,140 L80,280 L200,280 L200,140 Z"
              }
            ]
          },
          {
            "label": "上面",
            "paths": [
              {
                "type": "path",
                "d": "M80,140 L130,95 L250,95 L200,140"
              }
            ]
          },
          {
            "label": "右面",
            "paths": [
              {
                "type": "path",
                "d": "M200,140 L250,95 L250,235 L200,280"
              }
            ]
          }
        ]
      },
      {
        "id": "cylinder",
        "name": "圆柱",
        "emoji": "🧴",
        "steps": [
          {
            "label": "上椰圆",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 100,
                "rx": 70,
                "ry": 25
              }
            ]
          },
          {
            "label": "左边",
            "paths": [
              {
                "type": "line",
                "x1": 80,
                "y1": 100,
                "x2": 80,
                "y2": 260
              }
            ]
          },
          {
            "label": "右边",
            "paths": [
              {
                "type": "line",
                "x1": 220,
                "y1": 100,
                "x2": 220,
                "y2": 260
              }
            ]
          },
          {
            "label": "下椰圆",
            "paths": [
              {
                "type": "path",
                "d": "M80,260 Q80,285 150,285 Q220,285 220,260"
              }
            ]
          }
        ]
      },
      {
        "id": "cone",
        "name": "圆锥",
        "emoji": "🚩",
        "steps": [
          {
            "label": "左边",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 70,
                "x2": 80,
                "y2": 270
              }
            ]
          },
          {
            "label": "右边",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 70,
                "x2": 220,
                "y2": 270
              }
            ]
          },
          {
            "label": "底部椰圆",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 270,
                "rx": 70,
                "ry": 22
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "letters",
    "name": "字母",
    "emoji": "🔤",
    "drawings": [
      {
        "id": "letter_A",
        "name": "A",
        "emoji": "🔤",
        "steps": [
          {
            "label": "左斜",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 50,
                "x2": 80,
                "y2": 300
              }
            ]
          },
          {
            "label": "右斜",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 50,
                "x2": 220,
                "y2": 300
              }
            ]
          },
          {
            "label": "横",
            "paths": [
              {
                "type": "line",
                "x1": 110,
                "y1": 190,
                "x2": 190,
                "y2": 190
              }
            ]
          }
        ]
      },
      {
        "id": "letter_B",
        "name": "B",
        "emoji": "🔤",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "上弧",
            "paths": [
              {
                "type": "path",
                "d": "M90,50 L160,50 Q210,50 210,100 Q210,150 160,150 L90,150"
              }
            ]
          },
          {
            "label": "下弧",
            "paths": [
              {
                "type": "path",
                "d": "M90,150 L170,150 Q220,150 220,225 Q220,300 170,300 L90,300"
              }
            ]
          }
        ]
      },
      {
        "id": "letter_C",
        "name": "C",
        "emoji": "🔤",
        "steps": [
          {
            "label": "弧线",
            "paths": [
              {
                "type": "path",
                "d": "M220,80 Q150,30 100,80 Q60,140 60,175 Q60,210 100,270 Q150,320 220,270"
              }
            ]
          }
        ]
      },
      {
        "id": "letter_D",
        "name": "D",
        "emoji": "🔤",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "弧",
            "paths": [
              {
                "type": "path",
                "d": "M90,50 Q240,50 240,175 Q240,300 90,300"
              }
            ]
          }
        ]
      },
      {
        "id": "letter_E",
        "name": "E",
        "emoji": "🔤",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "上横",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 210,
                "y2": 50
              }
            ]
          },
          {
            "label": "中横",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 175,
                "x2": 190,
                "y2": 175
              }
            ]
          },
          {
            "label": "下横",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 300,
                "x2": 210,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_F",
        "name": "F",
        "emoji": "🔤",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "上横",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 210,
                "y2": 50
              }
            ]
          },
          {
            "label": "中横",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 175,
                "x2": 190,
                "y2": 175
              }
            ]
          }
        ]
      },
      {
        "id": "letter_G",
        "name": "G",
        "emoji": "🔤",
        "steps": [
          {
            "label": "弧线",
            "paths": [
              {
                "type": "path",
                "d": "M220,80 Q150,30 100,80 Q60,140 60,175 Q60,210 100,270 Q150,320 220,270 L220,175"
              }
            ]
          },
          {
            "label": "横",
            "paths": [
              {
                "type": "line",
                "x1": 160,
                "y1": 175,
                "x2": 220,
                "y2": 175
              }
            ]
          }
        ]
      },
      {
        "id": "letter_H",
        "name": "H",
        "emoji": "🔤",
        "steps": [
          {
            "label": "左竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "右竖",
            "paths": [
              {
                "type": "line",
                "x1": 210,
                "y1": 50,
                "x2": 210,
                "y2": 300
              }
            ]
          },
          {
            "label": "横",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 175,
                "x2": 210,
                "y2": 175
              }
            ]
          }
        ]
      },
      {
        "id": "letter_I",
        "name": "I",
        "emoji": "🔤",
        "steps": [
          {
            "label": "上横",
            "paths": [
              {
                "type": "line",
                "x1": 110,
                "y1": 50,
                "x2": 190,
                "y2": 50
              }
            ]
          },
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 50,
                "x2": 150,
                "y2": 300
              }
            ]
          },
          {
            "label": "下横",
            "paths": [
              {
                "type": "line",
                "x1": 110,
                "y1": 300,
                "x2": 190,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_J",
        "name": "J",
        "emoji": "🔤",
        "steps": [
          {
            "label": "上横",
            "paths": [
              {
                "type": "line",
                "x1": 110,
                "y1": 50,
                "x2": 210,
                "y2": 50
              }
            ]
          },
          {
            "label": "竖和弯",
            "paths": [
              {
                "type": "path",
                "d": "M180,50 L180,240 Q180,300 120,300 Q90,300 80,270"
              }
            ]
          }
        ]
      },
      {
        "id": "letter_K",
        "name": "K",
        "emoji": "🔤",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "上斜",
            "paths": [
              {
                "type": "line",
                "x1": 210,
                "y1": 50,
                "x2": 90,
                "y2": 175
              }
            ]
          },
          {
            "label": "下斜",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 175,
                "x2": 210,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_L",
        "name": "L",
        "emoji": "🔤",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "横",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 300,
                "x2": 210,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_M",
        "name": "M",
        "emoji": "🔤",
        "steps": [
          {
            "label": "左竖",
            "paths": [
              {
                "type": "line",
                "x1": 70,
                "y1": 300,
                "x2": 70,
                "y2": 50
              }
            ]
          },
          {
            "label": "左斜",
            "paths": [
              {
                "type": "line",
                "x1": 70,
                "y1": 50,
                "x2": 150,
                "y2": 200
              }
            ]
          },
          {
            "label": "右斜",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 200,
                "x2": 230,
                "y2": 50
              }
            ]
          },
          {
            "label": "右竖",
            "paths": [
              {
                "type": "line",
                "x1": 230,
                "y1": 50,
                "x2": 230,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_N",
        "name": "N",
        "emoji": "🔤",
        "steps": [
          {
            "label": "左竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 300,
                "x2": 90,
                "y2": 50
              }
            ]
          },
          {
            "label": "斜",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 210,
                "y2": 300
              }
            ]
          },
          {
            "label": "右竖",
            "paths": [
              {
                "type": "line",
                "x1": 210,
                "y1": 300,
                "x2": 210,
                "y2": 50
              }
            ]
          }
        ]
      },
      {
        "id": "letter_O",
        "name": "O",
        "emoji": "🔤",
        "steps": [
          {
            "label": "圆",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 175,
                "rx": 80,
                "ry": 120
              }
            ]
          }
        ]
      },
      {
        "id": "letter_P",
        "name": "P",
        "emoji": "🔤",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "弧",
            "paths": [
              {
                "type": "path",
                "d": "M90,50 L160,50 Q220,50 220,110 Q220,170 160,170 L90,170"
              }
            ]
          }
        ]
      },
      {
        "id": "letter_Q",
        "name": "Q",
        "emoji": "🔤",
        "steps": [
          {
            "label": "圆",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 165,
                "rx": 80,
                "ry": 110
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "line",
                "x1": 180,
                "y1": 240,
                "x2": 220,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_R",
        "name": "R",
        "emoji": "🔤",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 90,
                "y2": 300
              }
            ]
          },
          {
            "label": "弧",
            "paths": [
              {
                "type": "path",
                "d": "M90,50 L160,50 Q220,50 220,110 Q220,170 160,170 L90,170"
              }
            ]
          },
          {
            "label": "腿",
            "paths": [
              {
                "type": "line",
                "x1": 140,
                "y1": 170,
                "x2": 220,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_S",
        "name": "S",
        "emoji": "🔤",
        "steps": [
          {
            "label": "上弧",
            "paths": [
              {
                "type": "path",
                "d": "M200,80 Q180,40 150,40 Q100,40 90,90 Q85,130 130,155"
              }
            ]
          },
          {
            "label": "下弧",
            "paths": [
              {
                "type": "path",
                "d": "M130,155 Q180,180 200,220 Q210,270 160,300 Q110,310 80,280"
              }
            ]
          }
        ]
      },
      {
        "id": "letter_T",
        "name": "T",
        "emoji": "🔤",
        "steps": [
          {
            "label": "横",
            "paths": [
              {
                "type": "line",
                "x1": 70,
                "y1": 50,
                "x2": 230,
                "y2": 50
              }
            ]
          },
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 50,
                "x2": 150,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_U",
        "name": "U",
        "emoji": "🔤",
        "steps": [
          {
            "label": "左竖",
            "paths": [
              {
                "type": "path",
                "d": "M90,50 L90,230 Q90,300 150,300 Q210,300 210,230 L210,50"
              }
            ]
          }
        ]
      },
      {
        "id": "letter_V",
        "name": "V",
        "emoji": "🔤",
        "steps": [
          {
            "label": "左斜",
            "paths": [
              {
                "type": "line",
                "x1": 80,
                "y1": 50,
                "x2": 150,
                "y2": 300
              }
            ]
          },
          {
            "label": "右斜",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 300,
                "x2": 220,
                "y2": 50
              }
            ]
          }
        ]
      },
      {
        "id": "letter_W",
        "name": "W",
        "emoji": "🔤",
        "steps": [
          {
            "label": "第1笔",
            "paths": [
              {
                "type": "line",
                "x1": 60,
                "y1": 50,
                "x2": 100,
                "y2": 300
              }
            ]
          },
          {
            "label": "第2笔",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 300,
                "x2": 150,
                "y2": 150
              }
            ]
          },
          {
            "label": "第3笔",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 150,
                "x2": 200,
                "y2": 300
              }
            ]
          },
          {
            "label": "第4笔",
            "paths": [
              {
                "type": "line",
                "x1": 200,
                "y1": 300,
                "x2": 240,
                "y2": 50
              }
            ]
          }
        ]
      },
      {
        "id": "letter_X",
        "name": "X",
        "emoji": "🔤",
        "steps": [
          {
            "label": "左上到右下",
            "paths": [
              {
                "type": "line",
                "x1": 80,
                "y1": 50,
                "x2": 220,
                "y2": 300
              }
            ]
          },
          {
            "label": "右上到左下",
            "paths": [
              {
                "type": "line",
                "x1": 220,
                "y1": 50,
                "x2": 80,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_Y",
        "name": "Y",
        "emoji": "🔤",
        "steps": [
          {
            "label": "左斜",
            "paths": [
              {
                "type": "line",
                "x1": 80,
                "y1": 50,
                "x2": 150,
                "y2": 175
              }
            ]
          },
          {
            "label": "右斜",
            "paths": [
              {
                "type": "line",
                "x1": 220,
                "y1": 50,
                "x2": 150,
                "y2": 175
              }
            ]
          },
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 175,
                "x2": 150,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "letter_Z",
        "name": "Z",
        "emoji": "🔤",
        "steps": [
          {
            "label": "上横",
            "paths": [
              {
                "type": "line",
                "x1": 80,
                "y1": 50,
                "x2": 220,
                "y2": 50
              }
            ]
          },
          {
            "label": "斜",
            "paths": [
              {
                "type": "line",
                "x1": 220,
                "y1": 50,
                "x2": 80,
                "y2": 300
              }
            ]
          },
          {
            "label": "下横",
            "paths": [
              {
                "type": "line",
                "x1": 80,
                "y1": 300,
                "x2": 220,
                "y2": 300
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "digits",
    "name": "数字",
    "emoji": "🔢",
    "drawings": [
      {
        "id": "digit_0",
        "name": "0",
        "emoji": "0",
        "steps": [
          {
            "label": "左弧",
            "svg": "svg/digit_0/step1_左弧.svg"
          },
          {
            "label": "右弧",
            "svg": "svg/digit_0/step2_右弧.svg"
          }
        ]
      },
      {
        "id": "digit_1",
        "name": "1",
        "emoji": "1",
        "steps": [
          {
            "label": "斜头",
            "svg": "svg/digit_1/step1_斜头.svg"
          },
          {
            "label": "竖",
            "svg": "svg/digit_1/step2_竖.svg"
          }
        ]
      },
      {
        "id": "digit_2",
        "name": "2",
        "emoji": "2",
        "steps": [
          {
            "label": "上弧",
            "svg": "svg/digit_2/step1_上弧.svg"
          },
          {
            "label": "底横",
            "svg": "svg/digit_2/step2_底横.svg"
          }
        ]
      },
      {
        "id": "digit_3",
        "name": "3",
        "emoji": "3",
        "steps": [
          {
            "label": "上弧",
            "svg": "svg/digit_3/step1_上弧.svg"
          },
          {
            "label": "下弧",
            "svg": "svg/digit_3/step2_下弧.svg"
          }
        ]
      },
      {
        "id": "digit_4",
        "name": "4",
        "emoji": "4",
        "steps": [
          {
            "label": "斜",
            "svg": "svg/digit_4/step1_斜.svg"
          },
          {
            "label": "横",
            "svg": "svg/digit_4/step2_横.svg"
          },
          {
            "label": "竖",
            "svg": "svg/digit_4/step3_竖.svg"
          }
        ]
      },
      {
        "id": "digit_5",
        "name": "5",
        "emoji": "5",
        "steps": [
          {
            "label": "顶横",
            "svg": "svg/digit_5/step1_顶横.svg"
          },
          {
            "label": "竖",
            "svg": "svg/digit_5/step2_竖.svg"
          },
          {
            "label": "下弧",
            "svg": "svg/digit_5/step3_下弧.svg"
          }
        ]
      },
      {
        "id": "digit_6",
        "name": "6",
        "emoji": "6",
        "steps": [
          {
            "label": "大弧",
            "svg": "svg/digit_6/step1_大弧.svg"
          },
          {
            "label": "圈",
            "svg": "svg/digit_6/step2_圈.svg"
          }
        ]
      },
      {
        "id": "digit_7",
        "name": "7",
        "emoji": "7",
        "steps": [
          {
            "label": "横",
            "svg": "svg/digit_7/step1_横.svg"
          },
          {
            "label": "斜",
            "svg": "svg/digit_7/step2_斜.svg"
          }
        ]
      },
      {
        "id": "digit_8",
        "name": "8",
        "emoji": "8",
        "steps": [
          {
            "label": "上圈",
            "svg": "svg/digit_8/step1_上圈.svg"
          },
          {
            "label": "下圈",
            "svg": "svg/digit_8/step2_下圈.svg"
          }
        ]
      },
      {
        "id": "digit_9",
        "name": "9",
        "emoji": "9",
        "steps": [
          {
            "label": "圈",
            "svg": "svg/digit_9/step1_圈.svg"
          },
          {
            "label": "竖弯",
            "svg": "svg/digit_9/step2_竖弯.svg"
          }
        ]
      }
    ]
  },
  {
    "id": "pinyin_sm",
    "name": "声母",
    "emoji": "拼",
    "drawings": [
      {
        "id": "pinyin_b",
        "name": "b",
        "emoji": "b",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 60,
                "x2": 100,
                "y2": 280
              }
            ]
          },
          {
            "label": "右弧",
            "paths": [
              {
                "type": "path",
                "d": "M100,180 C100,180 160,180 160,230 C160,280 100,280 100,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_p",
        "name": "p",
        "emoji": "p",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 100,
                "x2": 100,
                "y2": 320
              }
            ]
          },
          {
            "label": "右弧",
            "paths": [
              {
                "type": "path",
                "d": "M100,100 C100,100 160,100 160,150 C160,200 100,200 100,200"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_m",
        "name": "m",
        "emoji": "m",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 70,
                "y1": 150,
                "x2": 70,
                "y2": 280
              }
            ]
          },
          {
            "label": "第一拱",
            "paths": [
              {
                "type": "path",
                "d": "M70,150 C70,150 120,120 120,150 L120,280"
              }
            ]
          },
          {
            "label": "第二拱",
            "paths": [
              {
                "type": "path",
                "d": "M120,150 C120,150 170,120 170,150 L170,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_f",
        "name": "f",
        "emoji": "f",
        "steps": [
          {
            "label": "弯钩",
            "paths": [
              {
                "type": "path",
                "d": "M160,80 C140,80 120,100 120,130 L120,280"
              }
            ]
          },
          {
            "label": "横",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 150,
                "x2": 150,
                "y2": 150
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_d",
        "name": "d",
        "emoji": "d",
        "steps": [
          {
            "label": "左弧",
            "paths": [
              {
                "type": "path",
                "d": "M160,180 C160,180 100,180 100,230 C100,280 160,280 160,280"
              }
            ]
          },
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 160,
                "y1": 60,
                "x2": 160,
                "y2": 280
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_t",
        "name": "t",
        "emoji": "t",
        "steps": [
          {
            "label": "横",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 150,
                "x2": 160,
                "y2": 150
              }
            ]
          },
          {
            "label": "竖勾",
            "paths": [
              {
                "type": "path",
                "d": "M130,80 L130,270 C130,290 145,290 155,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_n",
        "name": "n",
        "emoji": "n",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 150,
                "x2": 100,
                "y2": 280
              }
            ]
          },
          {
            "label": "拱",
            "paths": [
              {
                "type": "path",
                "d": "M100,150 C100,150 160,120 160,150 L160,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_l",
        "name": "l",
        "emoji": "l",
        "steps": [
          {
            "label": "竖勾",
            "paths": [
              {
                "type": "path",
                "d": "M130,60 L130,270 C130,290 145,290 155,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_g",
        "name": "g",
        "emoji": "g",
        "steps": [
          {
            "label": "左弧",
            "paths": [
              {
                "type": "path",
                "d": "M160,150 C160,150 100,150 100,200 C100,250 160,250 160,250"
              }
            ]
          },
          {
            "label": "竖勾",
            "paths": [
              {
                "type": "path",
                "d": "M160,150 L160,300 C160,320 140,320 130,310"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_k",
        "name": "k",
        "emoji": "k",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 60,
                "x2": 100,
                "y2": 280
              }
            ]
          },
          {
            "label": "斜上",
            "paths": [
              {
                "type": "line",
                "x1": 160,
                "y1": 140,
                "x2": 100,
                "y2": 200
              }
            ]
          },
          {
            "label": "斜下",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 200,
                "x2": 160,
                "y2": 280
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_h",
        "name": "h",
        "emoji": "h",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 60,
                "x2": 100,
                "y2": 280
              }
            ]
          },
          {
            "label": "拱",
            "paths": [
              {
                "type": "path",
                "d": "M100,180 C100,180 160,150 160,180 L160,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_j",
        "name": "j",
        "emoji": "j",
        "steps": [
          {
            "label": "竖弯",
            "paths": [
              {
                "type": "path",
                "d": "M140,150 L140,290 C140,320 120,320 110,310"
              }
            ]
          },
          {
            "label": "点",
            "paths": [
              {
                "type": "path",
                "d": "M135,120 C140,125 145,130 140,135"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_q",
        "name": "q",
        "emoji": "q",
        "steps": [
          {
            "label": "左弧",
            "paths": [
              {
                "type": "path",
                "d": "M150,150 C150,150 90,150 90,200 C90,250 150,250 150,250"
              }
            ]
          },
          {
            "label": "竖勾",
            "paths": [
              {
                "type": "path",
                "d": "M150,150 L150,300 C150,320 165,320 175,310"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_x",
        "name": "x",
        "emoji": "x",
        "steps": [
          {
            "label": "左斜",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 150,
                "x2": 160,
                "y2": 280
              }
            ]
          },
          {
            "label": "右斜",
            "paths": [
              {
                "type": "line",
                "x1": 160,
                "y1": 150,
                "x2": 100,
                "y2": 280
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_zh",
        "name": "zh",
        "emoji": "zh",
        "steps": [
          {
            "label": "z上横",
            "paths": [
              {
                "type": "line",
                "x1": 60,
                "y1": 150,
                "x2": 110,
                "y2": 150
              }
            ]
          },
          {
            "label": "z斜",
            "paths": [
              {
                "type": "line",
                "x1": 110,
                "y1": 150,
                "x2": 60,
                "y2": 280
              }
            ]
          },
          {
            "label": "z下横",
            "paths": [
              {
                "type": "line",
                "x1": 60,
                "y1": 280,
                "x2": 110,
                "y2": 280
              }
            ]
          },
          {
            "label": "h竖",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 60,
                "x2": 150,
                "y2": 280
              }
            ]
          },
          {
            "label": "h拱",
            "paths": [
              {
                "type": "path",
                "d": "M150,180 C150,180 200,150 200,180 L200,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_ch",
        "name": "ch",
        "emoji": "ch",
        "steps": [
          {
            "label": "c弧",
            "paths": [
              {
                "type": "path",
                "d": "M110,150 C70,150 70,215 70,215 C70,280 110,280 110,280"
              }
            ]
          },
          {
            "label": "h竖",
            "paths": [
              {
                "type": "line",
                "x1": 160,
                "y1": 60,
                "x2": 160,
                "y2": 280
              }
            ]
          },
          {
            "label": "h拱",
            "paths": [
              {
                "type": "path",
                "d": "M160,180 C160,180 210,150 210,180 L210,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_sh",
        "name": "sh",
        "emoji": "sh",
        "steps": [
          {
            "label": "s上弧",
            "paths": [
              {
                "type": "path",
                "d": "M110,150 C70,150 70,180 90,195"
              }
            ]
          },
          {
            "label": "s下弧",
            "paths": [
              {
                "type": "path",
                "d": "M90,195 C110,210 110,250 70,250"
              }
            ]
          },
          {
            "label": "h竖",
            "paths": [
              {
                "type": "line",
                "x1": 160,
                "y1": 60,
                "x2": 160,
                "y2": 280
              }
            ]
          },
          {
            "label": "h拱",
            "paths": [
              {
                "type": "path",
                "d": "M160,180 C160,180 210,150 210,180 L210,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_r",
        "name": "r",
        "emoji": "r",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 110,
                "y1": 140,
                "x2": 110,
                "y2": 280
              }
            ]
          },
          {
            "label": "弯头",
            "paths": [
              {
                "type": "path",
                "d": "M110,140 C110,130 130,125 150,135 C155,138 155,145 150,150"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_z",
        "name": "z",
        "emoji": "z",
        "steps": [
          {
            "label": "上横",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 150,
                "x2": 160,
                "y2": 150
              }
            ]
          },
          {
            "label": "斜",
            "paths": [
              {
                "type": "line",
                "x1": 160,
                "y1": 150,
                "x2": 100,
                "y2": 280
              }
            ]
          },
          {
            "label": "下横",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 280,
                "x2": 160,
                "y2": 280
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_c",
        "name": "c",
        "emoji": "c",
        "steps": [
          {
            "label": "弧",
            "paths": [
              {
                "type": "path",
                "d": "M160,150 C100,150 100,215 100,215 C100,280 160,280 160,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_s",
        "name": "s",
        "emoji": "s",
        "steps": [
          {
            "label": "上弧",
            "paths": [
              {
                "type": "path",
                "d": "M155,155 C110,150 110,190 130,210"
              }
            ]
          },
          {
            "label": "下弧",
            "paths": [
              {
                "type": "path",
                "d": "M130,210 C150,230 150,270 110,275"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_y",
        "name": "y",
        "emoji": "y",
        "steps": [
          {
            "label": "左斜",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 150,
                "x2": 130,
                "y2": 230
              }
            ]
          },
          {
            "label": "右斜尾",
            "paths": [
              {
                "type": "path",
                "d": "M160,150 L130,230 L120,300"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_w",
        "name": "w",
        "emoji": "w",
        "steps": [
          {
            "label": "第一斜",
            "paths": [
              {
                "type": "line",
                "x1": 80,
                "y1": 150,
                "x2": 105,
                "y2": 280
              }
            ]
          },
          {
            "label": "第一谷",
            "paths": [
              {
                "type": "line",
                "x1": 105,
                "y1": 280,
                "x2": 130,
                "y2": 200
              }
            ]
          },
          {
            "label": "第二谷",
            "paths": [
              {
                "type": "line",
                "x1": 130,
                "y1": 200,
                "x2": 155,
                "y2": 280
              }
            ]
          },
          {
            "label": "末斜",
            "paths": [
              {
                "type": "line",
                "x1": 155,
                "y1": 280,
                "x2": 180,
                "y2": 150
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pinyin_ym",
    "name": "韵母",
    "emoji": "音",
    "drawings": [
      {
        "id": "pinyin_a",
        "name": "a",
        "emoji": "a",
        "steps": [
          {
            "label": "圆弧",
            "paths": [
              {
                "type": "path",
                "d": "M155,200 C155,170 130,150 110,155 C85,162 80,190 80,215 C80,245 95,270 120,275 C145,280 155,265 155,250"
              }
            ]
          },
          {
            "label": "右竖",
            "paths": [
              {
                "type": "line",
                "x1": 155,
                "y1": 150,
                "x2": 155,
                "y2": 280
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_o",
        "name": "o",
        "emoji": "o",
        "steps": [
          {
            "label": "左半圆",
            "paths": [
              {
                "type": "path",
                "d": "M150,150 C100,150 100,215 100,215 C100,280 150,280 150,280"
              }
            ]
          },
          {
            "label": "右半圆",
            "paths": [
              {
                "type": "path",
                "d": "M150,150 C200,150 200,215 200,215 C200,280 150,280 150,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_e",
        "name": "e",
        "emoji": "e",
        "steps": [
          {
            "label": "横",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 210,
                "x2": 160,
                "y2": 210
              }
            ]
          },
          {
            "label": "弧",
            "paths": [
              {
                "type": "path",
                "d": "M160,210 C160,150 100,150 100,210 C100,280 160,280 160,270"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_i",
        "name": "i",
        "emoji": "i",
        "steps": [
          {
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 130,
                "y1": 150,
                "x2": 130,
                "y2": 280
              }
            ]
          },
          {
            "label": "点",
            "paths": [
              {
                "type": "path",
                "d": "M127,120 C130,125 133,130 130,135"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_u",
        "name": "u",
        "emoji": "u",
        "steps": [
          {
            "label": "左竖弧",
            "paths": [
              {
                "type": "path",
                "d": "M105,150 L105,240 C105,280 150,280 155,250"
              }
            ]
          },
          {
            "label": "右竖",
            "paths": [
              {
                "type": "line",
                "x1": 155,
                "y1": 150,
                "x2": 155,
                "y2": 280
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_v",
        "name": "ü",
        "emoji": "ü",
        "steps": [
          {
            "label": "左竖弧",
            "paths": [
              {
                "type": "path",
                "d": "M105,150 L105,240 C105,280 150,280 155,250"
              }
            ]
          },
          {
            "label": "右竖",
            "paths": [
              {
                "type": "line",
                "x1": 155,
                "y1": 150,
                "x2": 155,
                "y2": 280
              }
            ]
          },
          {
            "label": "两点",
            "paths": [
              {
                "type": "path",
                "d": "M115,120 C118,125 118,130 115,130 M145,120 C148,125 148,130 145,130"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_ai",
        "name": "ai",
        "emoji": "ai",
        "steps": [
          {
            "label": "a圆弧",
            "paths": [
              {
                "type": "path",
                "d": "M115,200 C115,170 95,155 78,160 C55,167 50,190 50,215 C50,245 62,265 82,270 C100,275 115,262 115,250"
              }
            ]
          },
          {
            "label": "a右竖",
            "paths": [
              {
                "type": "line",
                "x1": 115,
                "y1": 150,
                "x2": 115,
                "y2": 280
              }
            ]
          },
          {
            "label": "i竖",
            "paths": [
              {
                "type": "line",
                "x1": 170,
                "y1": 150,
                "x2": 170,
                "y2": 280
              }
            ]
          },
          {
            "label": "i点",
            "paths": [
              {
                "type": "path",
                "d": "M167,120 C170,125 173,130 170,135"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_ei",
        "name": "ei",
        "emoji": "ei",
        "steps": [
          {
            "label": "e横",
            "paths": [
              {
                "type": "line",
                "x1": 60,
                "y1": 210,
                "x2": 120,
                "y2": 210
              }
            ]
          },
          {
            "label": "e弧",
            "paths": [
              {
                "type": "path",
                "d": "M120,210 C120,150 60,150 60,210 C60,280 120,280 120,270"
              }
            ]
          },
          {
            "label": "i竖",
            "paths": [
              {
                "type": "line",
                "x1": 170,
                "y1": 150,
                "x2": 170,
                "y2": 280
              }
            ]
          },
          {
            "label": "i点",
            "paths": [
              {
                "type": "path",
                "d": "M167,120 C170,125 173,130 170,135"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_ao",
        "name": "ao",
        "emoji": "ao",
        "steps": [
          {
            "label": "a圆弧",
            "paths": [
              {
                "type": "path",
                "d": "M100,200 C100,170 80,155 65,160 C45,167 40,190 40,215 C40,245 52,265 72,270 C90,275 100,262 100,250"
              }
            ]
          },
          {
            "label": "a右竖",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 150,
                "x2": 100,
                "y2": 280
              }
            ]
          },
          {
            "label": "o圆",
            "paths": [
              {
                "type": "path",
                "d": "M175,150 C145,150 140,190 140,215 C140,250 155,280 175,280 C195,280 210,250 210,215 C210,190 205,150 175,150"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_ou",
        "name": "ou",
        "emoji": "ou",
        "steps": [
          {
            "label": "o左弧",
            "paths": [
              {
                "type": "path",
                "d": "M95,150 C65,150 55,190 55,215 C55,250 70,280 95,280"
              }
            ]
          },
          {
            "label": "o右弧",
            "paths": [
              {
                "type": "path",
                "d": "M95,150 C125,150 135,190 135,215 C135,250 120,280 95,280"
              }
            ]
          },
          {
            "label": "u弧竖",
            "paths": [
              {
                "type": "path",
                "d": "M165,150 L165,240 C165,275 190,275 195,255"
              }
            ]
          },
          {
            "label": "u右竖",
            "paths": [
              {
                "type": "line",
                "x1": 195,
                "y1": 150,
                "x2": 195,
                "y2": 280
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_an",
        "name": "an",
        "emoji": "an",
        "steps": [
          {
            "label": "a圆弧",
            "paths": [
              {
                "type": "path",
                "d": "M100,200 C100,170 80,155 65,160 C45,167 40,190 40,215 C40,245 52,265 72,270 C90,275 100,262 100,250"
              }
            ]
          },
          {
            "label": "a右竖",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 150,
                "x2": 100,
                "y2": 280
              }
            ]
          },
          {
            "label": "n竖",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 150,
                "x2": 150,
                "y2": 280
              }
            ]
          },
          {
            "label": "n拱",
            "paths": [
              {
                "type": "path",
                "d": "M150,150 C150,150 200,120 200,150 L200,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_en",
        "name": "en",
        "emoji": "en",
        "steps": [
          {
            "label": "e横",
            "paths": [
              {
                "type": "line",
                "x1": 55,
                "y1": 210,
                "x2": 110,
                "y2": 210
              }
            ]
          },
          {
            "label": "e弧",
            "paths": [
              {
                "type": "path",
                "d": "M110,210 C110,150 55,150 55,210 C55,280 110,280 110,270"
              }
            ]
          },
          {
            "label": "n竖",
            "paths": [
              {
                "type": "line",
                "x1": 155,
                "y1": 150,
                "x2": 155,
                "y2": 280
              }
            ]
          },
          {
            "label": "n拱",
            "paths": [
              {
                "type": "path",
                "d": "M155,150 C155,150 205,120 205,150 L205,280"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_ang",
        "name": "ang",
        "emoji": "ang",
        "steps": [
          {
            "label": "a圆弧",
            "paths": [
              {
                "type": "path",
                "d": "M65,200 C65,175 50,160 38,165 C22,170 18,190 18,210 C18,235 28,255 45,258 C58,261 65,252 65,242"
              }
            ]
          },
          {
            "label": "a右竖",
            "paths": [
              {
                "type": "line",
                "x1": 65,
                "y1": 150,
                "x2": 65,
                "y2": 280
              }
            ]
          },
          {
            "label": "n竖",
            "paths": [
              {
                "type": "line",
                "x1": 110,
                "y1": 150,
                "x2": 110,
                "y2": 280
              }
            ]
          },
          {
            "label": "n拱",
            "paths": [
              {
                "type": "path",
                "d": "M110,150 C110,150 145,125 145,150 L145,280"
              }
            ]
          },
          {
            "label": "g弧",
            "paths": [
              {
                "type": "path",
                "d": "M200,150 C200,150 170,150 170,185 C170,220 200,220 200,220"
              }
            ]
          },
          {
            "label": "g竖勾",
            "paths": [
              {
                "type": "path",
                "d": "M200,150 L200,300 C200,320 180,320 170,310"
              }
            ]
          }
        ]
      },
      {
        "id": "pinyin_eng",
        "name": "eng",
        "emoji": "eng",
        "steps": [
          {
            "label": "e横",
            "paths": [
              {
                "type": "line",
                "x1": 20,
                "y1": 210,
                "x2": 65,
                "y2": 210
              }
            ]
          },
          {
            "label": "e弧",
            "paths": [
              {
                "type": "path",
                "d": "M65,210 C65,160 20,160 20,210 C20,260 65,260 65,252"
              }
            ]
          },
          {
            "label": "n竖",
            "paths": [
              {
                "type": "line",
                "x1": 105,
                "y1": 150,
                "x2": 105,
                "y2": 280
              }
            ]
          },
          {
            "label": "n拱",
            "paths": [
              {
                "type": "path",
                "d": "M105,150 C105,150 140,125 140,150 L140,280"
              }
            ]
          },
          {
            "label": "g弧",
            "paths": [
              {
                "type": "path",
                "d": "M200,150 C200,150 170,150 170,185 C170,220 200,220 200,220"
              }
            ]
          },
          {
            "label": "g竖勾",
            "paths": [
              {
                "type": "path",
                "d": "M200,150 L200,300 C200,320 180,320 170,310"
              }
            ]
          }
        ]
      }
    ]
  }
];

// Flat list for backward compat
const DRAWINGS = CATEGORIES.flatMap(c => c.drawings);
