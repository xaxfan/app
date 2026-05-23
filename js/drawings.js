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
            "paths": [
              {
                "type": "path",
                "d": "M75,90 Q75,40 150,40 Q225,40 225,90 Q225,160 200,180 Q175,195 150,195 Q125,195 100,180 Q75,160 75,90"
              }
            ]
          },
          {
            "label": "耳朵",
            "paths": [
              {
                "type": "circle",
                "cx": 95,
                "cy": 65,
                "r": 25
              },
              {
                "type": "circle",
                "cx": 205,
                "cy": 65,
                "r": 25
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "line",
                "x1": 118,
                "y1": 110,
                "x2": 118,
                "y2": 130
              },
              {
                "type": "line",
                "x1": 182,
                "y1": 110,
                "x2": 182,
                "y2": 130
              }
            ]
          },
          {
            "label": "鼻子嘴巴",
            "paths": [
              {
                "type": "circle",
                "cx": 150,
                "cy": 150,
                "r": 5
              },
              {
                "type": "path",
                "d": "M140,160 Q150,170 160,160"
              }
            ]
          },
          {
            "label": "胡须",
            "paths": [
              {
                "type": "line",
                "x1": 100,
                "y1": 145,
                "x2": 130,
                "y2": 150
              },
              {
                "type": "line",
                "x1": 100,
                "y1": 158,
                "x2": 130,
                "y2": 158
              },
              {
                "type": "line",
                "x1": 100,
                "y1": 170,
                "x2": 130,
                "y2": 165
              },
              {
                "type": "line",
                "x1": 200,
                "y1": 145,
                "x2": 170,
                "y2": 150
              },
              {
                "type": "line",
                "x1": 200,
                "y1": 158,
                "x2": 170,
                "y2": 158
              },
              {
                "type": "line",
                "x1": 200,
                "y1": 170,
                "x2": 170,
                "y2": 165
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M120,195 Q115,220 115,250 Q115,280 135,285 L165,285 Q185,280 185,250 Q185,220 180,195"
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M185,260 Q210,250 220,230 Q225,215 215,210 Q205,215 210,230"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M70,80 Q70,40 150,40 Q230,40 230,80 Q230,160 210,180 Q185,200 150,200 Q115,200 90,180 Q70,160 70,80"
              }
            ]
          },
          {
            "label": "角",
            "paths": [
              {
                "type": "path",
                "d": "M95,50 L80,20 L105,45"
              },
              {
                "type": "path",
                "d": "M205,50 L220,20 L195,45"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 115,
                "cy": 110,
                "r": 8
              },
              {
                "type": "circle",
                "cx": 185,
                "cy": 110,
                "r": 8
              }
            ]
          },
          {
            "label": "鼻子",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 155,
                "rx": 28,
                "ry": 18
              },
              {
                "type": "circle",
                "cx": 140,
                "cy": 155,
                "r": 5
              },
              {
                "type": "circle",
                "cx": 160,
                "cy": 155,
                "r": 5
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M115,200 Q110,225 110,255 Q110,285 135,290 L165,290 Q190,285 190,255 Q190,225 185,200"
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M190,250 Q210,245 215,230 Q218,220 225,218"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M70,80 Q70,35 150,35 Q230,35 230,80 Q230,155 210,175 Q185,195 150,195 Q115,195 90,175 Q70,155 70,80"
              }
            ]
          },
          {
            "label": "耳朵",
            "paths": [
              {
                "type": "path",
                "d": "M80,60 L70,25 L105,50"
              },
              {
                "type": "path",
                "d": "M220,60 L230,25 L195,50"
              }
            ]
          },
          {
            "label": "王字",
            "paths": [
              {
                "type": "line",
                "x1": 130,
                "y1": 55,
                "x2": 170,
                "y2": 55
              },
              {
                "type": "line",
                "x1": 130,
                "y1": 70,
                "x2": 170,
                "y2": 70
              },
              {
                "type": "line",
                "x1": 130,
                "y1": 85,
                "x2": 170,
                "y2": 85
              },
              {
                "type": "line",
                "x1": 150,
                "y1": 55,
                "x2": 150,
                "y2": 85
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 115,
                "cy": 115,
                "r": 10
              },
              {
                "type": "circle",
                "cx": 185,
                "cy": 115,
                "r": 10
              }
            ]
          },
          {
            "label": "鼻子嘴巴",
            "paths": [
              {
                "type": "path",
                "d": "M145,145 L150,152 L155,145"
              },
              {
                "type": "path",
                "d": "M135,160 Q150,175 165,160"
              }
            ]
          },
          {
            "label": "斑纹",
            "paths": [
              {
                "type": "path",
                "d": "M85,100 Q80,115 85,130"
              },
              {
                "type": "path",
                "d": "M215,100 Q220,115 215,130"
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M118,195 Q112,220 112,255 Q112,285 140,290 L160,290 Q188,285 188,255 Q188,220 182,195"
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M188,250 Q215,240 225,225 Q230,210 222,205"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M80,100 Q80,55 150,55 Q220,55 220,100 Q220,165 200,185 Q175,200 150,200 Q125,200 100,185 Q80,165 80,100"
              }
            ]
          },
          {
            "label": "左耳",
            "paths": [
              {
                "type": "path",
                "d": "M110,60 Q105,10 115,5 Q125,0 130,55"
              }
            ]
          },
          {
            "label": "右耳",
            "paths": [
              {
                "type": "path",
                "d": "M170,55 Q175,0 185,5 Q195,10 190,60"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 120,
                "cy": 120,
                "r": 8
              },
              {
                "type": "circle",
                "cx": 180,
                "cy": 120,
                "r": 8
              }
            ]
          },
          {
            "label": "鼻子嘴巴",
            "paths": [
              {
                "type": "path",
                "d": "M145,155 L150,162 L155,155"
              },
              {
                "type": "path",
                "d": "M140,168 Q150,178 160,168"
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M120,200 Q115,225 115,255 Q115,285 140,290 L160,290 Q185,285 185,255 Q185,225 180,200"
              }
            ]
          },
          {
            "label": "短尾巴",
            "paths": [
              {
                "type": "circle",
                "cx": 190,
                "cy": 255,
                "r": 10
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M75,85 Q75,40 150,40 Q225,40 225,85 Q225,155 205,175 Q180,195 150,195 Q120,195 95,175 Q75,155 75,85"
              }
            ]
          },
          {
            "label": "角",
            "paths": [
              {
                "type": "path",
                "d": "M105,45 L90,15 L115,40"
              },
              {
                "type": "path",
                "d": "M195,45 L210,15 L185,40"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 118,
                "cy": 105,
                "r": 10
              },
              {
                "type": "circle",
                "cx": 182,
                "cy": 105,
                "r": 10
              }
            ]
          },
          {
            "label": "鼻孔和嘴",
            "paths": [
              {
                "type": "circle",
                "cx": 140,
                "cy": 145,
                "r": 4
              },
              {
                "type": "circle",
                "cx": 160,
                "cy": 145,
                "r": 4
              },
              {
                "type": "path",
                "d": "M130,165 Q150,178 170,165"
              }
            ]
          },
          {
            "label": "小翅膀",
            "paths": [
              {
                "type": "path",
                "d": "M80,130 Q55,110 50,130 Q48,150 75,145"
              },
              {
                "type": "path",
                "d": "M220,130 Q245,110 250,130 Q252,150 225,145"
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M120,195 Q115,220 115,250 Q115,280 140,285 L160,285 Q185,280 185,250 Q185,220 180,195"
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M180,270 Q200,280 210,270 Q220,260 215,250 Q210,245 205,250"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M80,85 Q80,45 145,45 Q210,45 210,85 Q210,140 195,158 Q175,175 145,175 Q115,175 95,158 Q80,140 80,85"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 115,
                "cy": 95,
                "r": 8
              },
              {
                "type": "circle",
                "cx": 175,
                "cy": 95,
                "r": 8
              }
            ]
          },
          {
            "label": "舌头",
            "paths": [
              {
                "type": "path",
                "d": "M145,175 L140,195 L145,190 L150,195 L145,175"
              }
            ]
          },
          {
            "label": "嘴",
            "paths": [
              {
                "type": "path",
                "d": "M120,145 Q145,158 170,145"
              }
            ]
          },
          {
            "label": "身体弯曲",
            "paths": [
              {
                "type": "path",
                "d": "M125,175 Q100,200 120,220 Q150,240 180,225 Q210,210 200,240 Q190,265 160,270 Q130,268 125,250 Q120,235 135,230"
              }
            ]
          },
          {
            "label": "花纹",
            "paths": [
              {
                "type": "circle",
                "cx": 130,
                "cy": 210,
                "r": 5
              },
              {
                "type": "circle",
                "cx": 170,
                "cy": 230,
                "r": 5
              },
              {
                "type": "circle",
                "cx": 155,
                "cy": 258,
                "r": 4
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M80,80 Q80,40 150,40 Q220,40 220,80 Q220,155 200,180 Q175,200 150,200 Q125,200 100,180 Q80,155 80,80"
              }
            ]
          },
          {
            "label": "鬃毛",
            "paths": [
              {
                "type": "path",
                "d": "M120,42 Q115,20 130,30 Q125,10 140,22 Q140,5 152,18"
              },
              {
                "type": "path",
                "d": "M160,42 Q165,25 170,35"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 118,
                "cy": 105,
                "r": 8
              },
              {
                "type": "circle",
                "cx": 182,
                "cy": 105,
                "r": 8
              }
            ]
          },
          {
            "label": "鼻子嘴巴",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 160,
                "rx": 20,
                "ry": 14
              },
              {
                "type": "circle",
                "cx": 142,
                "cy": 158,
                "r": 3
              },
              {
                "type": "circle",
                "cx": 158,
                "cy": 158,
                "r": 3
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M118,200 Q112,225 112,255 Q112,285 140,290 L160,290 Q188,285 188,255 Q188,225 182,200"
              }
            ]
          },
          {
            "label": "腿",
            "paths": [
              {
                "type": "line",
                "x1": 125,
                "y1": 285,
                "x2": 122,
                "y2": 325
              },
              {
                "type": "line",
                "x1": 145,
                "y1": 288,
                "x2": 143,
                "y2": 325
              },
              {
                "type": "line",
                "x1": 158,
                "y1": 288,
                "x2": 160,
                "y2": 325
              },
              {
                "type": "line",
                "x1": 175,
                "y1": 285,
                "x2": 178,
                "y2": 325
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M188,255 Q210,250 218,238 Q222,225 215,220"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M85,90 Q85,50 150,50 Q215,50 215,90 Q215,155 198,172 Q175,190 150,190 Q125,190 102,172 Q85,155 85,90"
              }
            ]
          },
          {
            "label": "卷毛",
            "paths": [
              {
                "type": "path",
                "d": "M95,55 Q90,35 110,42 Q105,25 125,35 Q125,20 145,30 Q150,18 165,30 Q175,20 185,35 Q195,25 200,42 Q215,35 210,55"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 120,
                "cy": 110,
                "r": 7
              },
              {
                "type": "circle",
                "cx": 180,
                "cy": 110,
                "r": 7
              }
            ]
          },
          {
            "label": "嘴",
            "paths": [
              {
                "type": "path",
                "d": "M140,155 Q150,165 160,155"
              }
            ]
          },
          {
            "label": "云朵身体",
            "paths": [
              {
                "type": "path",
                "d": "M105,200 Q95,195 100,210 Q90,215 100,225 Q95,235 110,235 Q108,248 125,245 Q130,255 145,250 Q155,258 170,250 Q180,255 190,245 Q200,248 198,235 Q210,235 208,225 Q218,215 208,210 Q215,195 200,200 Q195,190 180,195 Q175,188 160,192 Q150,185 140,192 Q130,188 120,195 Q112,190 105,200"
              }
            ]
          },
          {
            "label": "腿",
            "paths": [
              {
                "type": "line",
                "x1": 125,
                "y1": 250,
                "x2": 125,
                "y2": 290
              },
              {
                "type": "line",
                "x1": 145,
                "y1": 252,
                "x2": 145,
                "y2": 290
              },
              {
                "type": "line",
                "x1": 160,
                "y1": 252,
                "x2": 160,
                "y2": 290
              },
              {
                "type": "line",
                "x1": 178,
                "y1": 250,
                "x2": 178,
                "y2": 290
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M80,85 Q80,40 150,40 Q220,40 220,85 Q220,155 200,175 Q175,195 150,195 Q125,195 100,175 Q80,155 80,85"
              }
            ]
          },
          {
            "label": "耳朵",
            "paths": [
              {
                "type": "circle",
                "cx": 72,
                "cy": 120,
                "r": 18
              },
              {
                "type": "circle",
                "cx": 228,
                "cy": 120,
                "r": 18
              }
            ]
          },
          {
            "label": "脸部轮廓",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 135,
                "rx": 40,
                "ry": 35
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 130,
                "cy": 115,
                "r": 7
              },
              {
                "type": "circle",
                "cx": 170,
                "cy": 115,
                "r": 7
              }
            ]
          },
          {
            "label": "鼻子嘴巴",
            "paths": [
              {
                "type": "circle",
                "cx": 145,
                "cy": 145,
                "r": 3
              },
              {
                "type": "circle",
                "cx": 155,
                "cy": 145,
                "r": 3
              },
              {
                "type": "path",
                "d": "M138,158 Q150,168 162,158"
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M120,195 Q115,220 115,250 Q115,280 140,285 L160,285 Q185,280 185,250 Q185,220 180,195"
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M185,260 Q210,270 220,255 Q228,240 222,230 Q215,225 210,232"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M85,90 Q85,50 150,50 Q215,50 215,90 Q215,155 198,172 Q175,190 150,190 Q125,190 102,172 Q85,155 85,90"
              }
            ]
          },
          {
            "label": "鸡冠",
            "paths": [
              {
                "type": "path",
                "d": "M130,52 Q135,30 145,48 Q148,25 158,48 Q162,30 168,52"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 125,
                "cy": 105,
                "r": 7
              }
            ]
          },
          {
            "label": "嘴",
            "paths": [
              {
                "type": "path",
                "d": "M175,110 L200,105 L200,118 Z"
              }
            ]
          },
          {
            "label": "肉垂",
            "paths": [
              {
                "type": "path",
                "d": "M155,165 Q160,182 150,182 Q145,182 148,165"
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M118,190 Q112,215 112,245 Q112,275 140,280 L160,280 Q188,275 188,245 Q188,215 182,190"
              }
            ]
          },
          {
            "label": "翅膀",
            "paths": [
              {
                "type": "path",
                "d": "M112,220 Q90,225 88,240 Q86,255 108,248"
              }
            ]
          },
          {
            "label": "腿和尾巴",
            "paths": [
              {
                "type": "line",
                "x1": 135,
                "y1": 278,
                "x2": 132,
                "y2": 315
              },
              {
                "type": "line",
                "x1": 162,
                "y1": 278,
                "x2": 165,
                "y2": 315
              },
              {
                "type": "path",
                "d": "M188,220 Q210,205 218,215 Q225,225 215,230"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M80,85 Q80,45 150,45 Q220,45 220,85 Q220,155 200,175 Q175,195 150,195 Q125,195 100,175 Q80,155 80,85"
              }
            ]
          },
          {
            "label": "耳朵",
            "paths": [
              {
                "type": "path",
                "d": "M85,70 Q70,65 65,85 Q60,110 80,115"
              },
              {
                "type": "path",
                "d": "M215,70 Q230,65 235,85 Q240,110 220,115"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 120,
                "cy": 110,
                "r": 9
              },
              {
                "type": "circle",
                "cx": 180,
                "cy": 110,
                "r": 9
              }
            ]
          },
          {
            "label": "鼻子嘴巴",
            "paths": [
              {
                "type": "circle",
                "cx": 150,
                "cy": 145,
                "r": 8
              },
              {
                "type": "path",
                "d": "M140,160 Q150,172 160,160"
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M118,195 Q112,220 112,255 Q112,285 140,290 L160,290 Q188,285 188,255 Q188,220 182,195"
              }
            ]
          },
          {
            "label": "腿",
            "paths": [
              {
                "type": "line",
                "x1": 128,
                "y1": 285,
                "x2": 125,
                "y2": 325
              },
              {
                "type": "line",
                "x1": 172,
                "y1": 285,
                "x2": 175,
                "y2": 325
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M188,240 Q210,230 215,215 Q218,205 210,200"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M70,85 Q70,35 150,35 Q230,35 230,85 Q230,160 210,180 Q185,200 150,200 Q115,200 90,180 Q70,160 70,85"
              }
            ]
          },
          {
            "label": "耳朵",
            "paths": [
              {
                "type": "path",
                "d": "M90,50 Q80,25 95,30 Q85,20 100,35"
              },
              {
                "type": "path",
                "d": "M210,50 Q220,25 205,30 Q215,20 200,35"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 115,
                "cy": 105,
                "r": 8
              },
              {
                "type": "circle",
                "cx": 185,
                "cy": 105,
                "r": 8
              }
            ]
          },
          {
            "label": "猪鼻子",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 148,
                "rx": 25,
                "ry": 18
              },
              {
                "type": "circle",
                "cx": 140,
                "cy": 148,
                "r": 5
              },
              {
                "type": "circle",
                "cx": 160,
                "cy": 148,
                "r": 5
              }
            ]
          },
          {
            "label": "嘴",
            "paths": [
              {
                "type": "path",
                "d": "M138,172 Q150,182 162,172"
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M110,200 Q100,220 100,250 Q100,285 130,295 L170,295 Q200,285 200,250 Q200,220 190,200"
              }
            ]
          },
          {
            "label": "腿",
            "paths": [
              {
                "type": "line",
                "x1": 120,
                "y1": 290,
                "x2": 120,
                "y2": 330
              },
              {
                "type": "line",
                "x1": 140,
                "y1": 293,
                "x2": 140,
                "y2": 330
              },
              {
                "type": "line",
                "x1": 160,
                "y1": 293,
                "x2": 160,
                "y2": 330
              },
              {
                "type": "line",
                "x1": 180,
                "y1": 290,
                "x2": 180,
                "y2": 330
              }
            ]
          },
          {
            "label": "卷尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M200,245 Q215,240 218,230 Q220,220 212,218 Q205,220 208,228"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M80,85 Q80,45 150,45 Q220,45 220,85 Q220,155 200,175 Q175,195 150,195 Q125,195 100,175 Q80,155 80,85"
              }
            ]
          },
          {
            "label": "耳朵",
            "paths": [
              {
                "type": "path",
                "d": "M88,60 L80,20 L115,55"
              },
              {
                "type": "path",
                "d": "M212,60 L220,20 L185,55"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 120,
                "cy": 110,
                "r": 10
              },
              {
                "type": "circle",
                "cx": 180,
                "cy": 110,
                "r": 10
              }
            ]
          },
          {
            "label": "鼻子嘴巴",
            "paths": [
              {
                "type": "path",
                "d": "M146,145 L150,152 L154,145"
              },
              {
                "type": "path",
                "d": "M150,152 Q142,162 135,158"
              },
              {
                "type": "path",
                "d": "M150,152 Q158,162 165,158"
              }
            ]
          },
          {
            "label": "胡须",
            "paths": [
              {
                "type": "line",
                "x1": 92,
                "y1": 135,
                "x2": 125,
                "y2": 140
              },
              {
                "type": "line",
                "x1": 92,
                "y1": 150,
                "x2": 125,
                "y2": 150
              },
              {
                "type": "line",
                "x1": 92,
                "y1": 165,
                "x2": 125,
                "y2": 160
              },
              {
                "type": "line",
                "x1": 208,
                "y1": 135,
                "x2": 175,
                "y2": 140
              },
              {
                "type": "line",
                "x1": 208,
                "y1": 150,
                "x2": 175,
                "y2": 150
              },
              {
                "type": "line",
                "x1": 208,
                "y1": 165,
                "x2": 175,
                "y2": 160
              }
            ]
          },
          {
            "label": "身体",
            "paths": [
              {
                "type": "path",
                "d": "M120,195 Q115,220 115,250 Q115,280 140,285 L160,285 Q185,280 185,250 Q185,220 180,195"
              }
            ]
          },
          {
            "label": "尾巴",
            "paths": [
              {
                "type": "path",
                "d": "M185,260 Q205,270 215,258 Q225,245 220,235 Q215,228 208,235"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M60,180 L60,300 L240,300 L240,180 Z"
              }
            ]
          },
          {
            "label": "屋顶",
            "paths": [
              {
                "type": "path",
                "d": "M40,180 L150,80 L260,180 Z"
              }
            ]
          },
          {
            "label": "烟囱",
            "paths": [
              {
                "type": "path",
                "d": "M200,80 L200,120 L220,120 L220,100"
              }
            ]
          },
          {
            "label": "门",
            "paths": [
              {
                "type": "path",
                "d": "M120,220 L120,300 L180,300 L180,220 Q150,210 120,220"
              }
            ]
          },
          {
            "label": "左窗",
            "paths": [
              {
                "type": "path",
                "d": "M75,210 L75,250 L110,250 L110,210 Z"
              },
              {
                "type": "line",
                "x1": 92,
                "y1": 210,
                "x2": 92,
                "y2": 250
              },
              {
                "type": "line",
                "x1": 75,
                "y1": 230,
                "x2": 110,
                "y2": 230
              }
            ]
          },
          {
            "label": "右窗",
            "paths": [
              {
                "type": "path",
                "d": "M190,210 L190,250 L225,250 L225,210 Z"
              },
              {
                "type": "line",
                "x1": 207,
                "y1": 210,
                "x2": 207,
                "y2": 250
              },
              {
                "type": "line",
                "x1": 190,
                "y1": 230,
                "x2": 225,
                "y2": 230
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M130,200 L125,320 L175,320 L170,200"
              }
            ]
          },
          {
            "label": "树根",
            "paths": [
              {
                "type": "path",
                "d": "M125,320 Q110,325 100,320"
              },
              {
                "type": "path",
                "d": "M175,320 Q190,325 200,320"
              }
            ]
          },
          {
            "label": "树冠下层",
            "paths": [
              {
                "type": "path",
                "d": "M70,210 Q60,170 100,160 Q130,150 150,155 Q170,150 200,160 Q240,170 230,210 Q220,240 150,235 Q80,240 70,210"
              }
            ]
          },
          {
            "label": "树冠上层",
            "paths": [
              {
                "type": "path",
                "d": "M90,160 Q85,120 120,105 Q150,90 180,105 Q215,120 210,160 Q200,180 150,175 Q100,180 90,160"
              }
            ]
          },
          {
            "label": "树冠顶部",
            "paths": [
              {
                "type": "path",
                "d": "M115,105 Q110,75 140,65 Q155,60 170,65 Q195,75 185,105 Q175,120 150,118 Q125,120 115,105"
              }
            ]
          },
          {
            "label": "树洞",
            "paths": [
              {
                "type": "path",
                "d": "M140,250 Q138,235 150,233 Q162,235 160,250 Q155,258 150,258 Q145,258 140,250"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M145,180 L140,310 L160,310 L155,180"
              }
            ]
          },
          {
            "label": "叶子",
            "paths": [
              {
                "type": "path",
                "d": "M140,240 Q110,230 105,245 Q100,260 130,255"
              },
              {
                "type": "path",
                "d": "M160,260 Q190,250 195,265 Q200,280 170,275"
              }
            ]
          },
          {
            "label": "上花瓣",
            "paths": [
              {
                "type": "path",
                "d": "M150,120 Q140,90 150,75 Q160,90 150,120"
              }
            ]
          },
          {
            "label": "左花瓣",
            "paths": [
              {
                "type": "path",
                "d": "M130,140 Q100,135 95,145 Q100,158 130,150"
              }
            ]
          },
          {
            "label": "右花瓣",
            "paths": [
              {
                "type": "path",
                "d": "M170,140 Q200,135 205,145 Q200,158 170,150"
              }
            ]
          },
          {
            "label": "下左花瓣",
            "paths": [
              {
                "type": "path",
                "d": "M135,160 Q115,175 118,185 Q130,190 145,170"
              }
            ]
          },
          {
            "label": "下右花瓣",
            "paths": [
              {
                "type": "path",
                "d": "M165,160 Q185,175 182,185 Q170,190 155,170"
              }
            ]
          },
          {
            "label": "花心",
            "paths": [
              {
                "type": "circle",
                "cx": 150,
                "cy": 145,
                "r": 15
              }
            ]
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
            "paths": [
              {
                "type": "line",
                "x1": 40,
                "y1": 300,
                "x2": 260,
                "y2": 300
              }
            ]
          },
          {
            "label": "第一丛",
            "paths": [
              {
                "type": "path",
                "d": "M80,300 Q75,265 85,250 Q90,265 85,300"
              },
              {
                "type": "path",
                "d": "M85,300 Q90,260 100,248 Q102,265 95,300"
              },
              {
                "type": "path",
                "d": "M75,300 Q65,270 70,258 Q78,270 78,300"
              }
            ]
          },
          {
            "label": "第二丛",
            "paths": [
              {
                "type": "path",
                "d": "M150,300 Q145,255 155,235 Q160,255 155,300"
              },
              {
                "type": "path",
                "d": "M155,300 Q163,260 170,245 Q172,265 165,300"
              },
              {
                "type": "path",
                "d": "M145,300 Q135,265 140,248 Q148,265 148,300"
              }
            ]
          },
          {
            "label": "第三丛",
            "paths": [
              {
                "type": "path",
                "d": "M210,300 Q205,268 215,255 Q220,268 215,300"
              },
              {
                "type": "path",
                "d": "M215,300 Q222,262 230,250 Q232,270 225,300"
              },
              {
                "type": "path",
                "d": "M205,300 Q195,272 200,260 Q208,272 208,300"
              }
            ]
          },
          {
            "label": "小花点",
            "paths": [
              {
                "type": "circle",
                "cx": 100,
                "cy": 242,
                "r": 4
              },
              {
                "type": "circle",
                "cx": 168,
                "cy": 238,
                "r": 4
              },
              {
                "type": "circle",
                "cx": 228,
                "cy": 245,
                "r": 4
              }
            ]
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
            "paths": [
              {
                "type": "circle",
                "cx": 150,
                "cy": 175,
                "r": 50
              }
            ]
          },
          {
            "label": "上光芒",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 105,
                "x2": 150,
                "y2": 75
              },
              {
                "type": "line",
                "x1": 125,
                "y1": 110,
                "x2": 115,
                "y2": 82
              },
              {
                "type": "line",
                "x1": 175,
                "y1": 110,
                "x2": 185,
                "y2": 82
              }
            ]
          },
          {
            "label": "下光芒",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 245,
                "x2": 150,
                "y2": 275
              },
              {
                "type": "line",
                "x1": 125,
                "y1": 240,
                "x2": 115,
                "y2": 268
              },
              {
                "type": "line",
                "x1": 175,
                "y1": 240,
                "x2": 185,
                "y2": 268
              }
            ]
          },
          {
            "label": "左光芒",
            "paths": [
              {
                "type": "line",
                "x1": 80,
                "y1": 175,
                "x2": 50,
                "y2": 175
              },
              {
                "type": "line",
                "x1": 85,
                "y1": 150,
                "x2": 58,
                "y2": 140
              },
              {
                "type": "line",
                "x1": 85,
                "y1": 200,
                "x2": 58,
                "y2": 210
              }
            ]
          },
          {
            "label": "右光芒",
            "paths": [
              {
                "type": "line",
                "x1": 220,
                "y1": 175,
                "x2": 250,
                "y2": 175
              },
              {
                "type": "line",
                "x1": 215,
                "y1": 150,
                "x2": 242,
                "y2": 140
              },
              {
                "type": "line",
                "x1": 215,
                "y1": 200,
                "x2": 242,
                "y2": 210
              }
            ]
          },
          {
            "label": "笑脸",
            "paths": [
              {
                "type": "circle",
                "cx": 135,
                "cy": 165,
                "r": 6
              },
              {
                "type": "circle",
                "cx": 165,
                "cy": 165,
                "r": 6
              },
              {
                "type": "path",
                "d": "M130,190 Q150,210 170,190"
              }
            ]
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
            "paths": [
              {
                "type": "path",
                "d": "M80,200 Q60,200 60,180 Q60,160 80,158 Q85,140 105,138 Q120,125 145,130 Q165,120 185,130 Q210,125 220,145 Q240,148 242,168 Q245,190 225,195 Q230,210 210,212 Q195,220 175,215 Q155,225 135,215 Q110,220 95,212 Q75,215 80,200"
              }
            ]
          },
          {
            "label": "内部线条",
            "paths": [
              {
                "type": "path",
                "d": "M100,170 Q120,162 140,168"
              },
              {
                "type": "path",
                "d": "M160,165 Q180,158 200,163"
              }
            ]
          },
          {
            "label": "眼睛",
            "paths": [
              {
                "type": "circle",
                "cx": 125,
                "cy": 178,
                "r": 5
              },
              {
                "type": "circle",
                "cx": 175,
                "cy": 178,
                "r": 5
              }
            ]
          },
          {
            "label": "嘴",
            "paths": [
              {
                "type": "path",
                "d": "M140,195 Q150,203 160,195"
              }
            ]
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
        "emoji": "🔢",
        "steps": [
          {
            "label": "0",
            "paths": [
              {
                "type": "ellipse",
                "cx": 150,
                "cy": 175,
                "rx": 60,
                "ry": 125
              }
            ]
          }
        ]
      },
      {
        "id": "digit_1",
        "name": "1",
        "emoji": "🔢",
        "steps": [
          {
            "label": "1",
            "paths": [
              {
                "type": "line",
                "x1": 120,
                "y1": 80,
                "x2": 150,
                "y2": 50
              },
              {
                "type": "line",
                "x1": 150,
                "y1": 50,
                "x2": 150,
                "y2": 300
              },
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
        "id": "digit_2",
        "name": "2",
        "emoji": "🔢",
        "steps": [
          {
            "label": "2",
            "paths": [
              {
                "type": "path",
                "d": "M100,100 Q100,50 150,50 Q210,50 210,100 Q210,150 150,190 Q90,240 90,300 L210,300"
              }
            ]
          }
        ]
      },
      {
        "id": "digit_3",
        "name": "3",
        "emoji": "🔢",
        "steps": [
          {
            "label": "3",
            "paths": [
              {
                "type": "path",
                "d": "M100,70 Q150,40 200,70 Q230,110 200,150 Q170,175 150,175"
              },
              {
                "type": "path",
                "d": "M150,175 Q200,175 220,220 Q230,270 190,300 Q150,310 100,280"
              }
            ]
          }
        ]
      },
      {
        "id": "digit_4",
        "name": "4",
        "emoji": "🔢",
        "steps": [
          {
            "label": "4",
            "paths": [
              {
                "type": "line",
                "x1": 180,
                "y1": 50,
                "x2": 80,
                "y2": 210
              },
              {
                "type": "line",
                "x1": 80,
                "y1": 210,
                "x2": 220,
                "y2": 210
              },
              {
                "type": "line",
                "x1": 180,
                "y1": 50,
                "x2": 180,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "digit_5",
        "name": "5",
        "emoji": "🔢",
        "steps": [
          {
            "label": "5",
            "paths": [
              {
                "type": "line",
                "x1": 200,
                "y1": 50,
                "x2": 100,
                "y2": 50
              },
              {
                "type": "line",
                "x1": 100,
                "y1": 50,
                "x2": 100,
                "y2": 160
              },
              {
                "type": "path",
                "d": "M100,160 Q150,140 200,160 Q230,200 210,260 Q180,310 130,300 Q90,290 90,260"
              }
            ]
          }
        ]
      },
      {
        "id": "digit_6",
        "name": "6",
        "emoji": "🔢",
        "steps": [
          {
            "label": "6",
            "paths": [
              {
                "type": "path",
                "d": "M200,70 Q150,40 110,80 Q80,130 80,200 Q80,270 120,300 Q160,320 200,290 Q230,260 220,210 Q210,170 170,160 Q120,160 90,200"
              }
            ]
          }
        ]
      },
      {
        "id": "digit_7",
        "name": "7",
        "emoji": "🔢",
        "steps": [
          {
            "label": "7",
            "paths": [
              {
                "type": "line",
                "x1": 90,
                "y1": 50,
                "x2": 210,
                "y2": 50
              },
              {
                "type": "line",
                "x1": 210,
                "y1": 50,
                "x2": 130,
                "y2": 300
              }
            ]
          }
        ]
      },
      {
        "id": "digit_8",
        "name": "8",
        "emoji": "🔢",
        "steps": [
          {
            "label": "8",
            "paths": [
              {
                "type": "path",
                "d": "M150,50 Q100,50 100,100 Q100,150 150,175 Q200,150 200,100 Q200,50 150,50"
              },
              {
                "type": "path",
                "d": "M150,175 Q90,200 90,250 Q90,300 150,300 Q210,300 210,250 Q210,200 150,175"
              }
            ]
          }
        ]
      },
      {
        "id": "digit_9",
        "name": "9",
        "emoji": "🔢",
        "steps": [
          {
            "label": "9",
            "paths": [
              {
                "type": "path",
                "d": "M200,150 Q230,110 210,70 Q180,40 140,50 Q100,60 90,100 Q80,140 110,170 Q150,190 200,170 L200,150"
              },
              {
                "type": "path",
                "d": "M200,170 Q210,220 200,270 Q170,310 120,290"
              }
            ]
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
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 130,
                "y1": 80,
                "x2": 130,
                "y2": 280
              }
            ]
          },
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
            "label": "竖",
            "paths": [
              {
                "type": "line",
                "x1": 130,
                "y1": 60,
                "x2": 130,
                "y2": 280
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
            "label": "竖尾",
            "paths": [
              {
                "type": "line",
                "x1": 160,
                "y1": 150,
                "x2": 160,
                "y2": 320
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
            "label": "竖尾",
            "paths": [
              {
                "type": "line",
                "x1": 150,
                "y1": 150,
                "x2": 150,
                "y2": 320
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
                "y1": 150,
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
                "d": "M110,150 C110,150 150,140 150,160"
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
            "label": "左弧",
            "paths": [
              {
                "type": "path",
                "d": "M155,150 C155,150 95,150 95,215 C95,280 155,280 155,280"
              }
            ]
          },
          {
            "label": "竖",
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
            "label": "a弧",
            "paths": [
              {
                "type": "path",
                "d": "M115,150 C115,150 70,150 70,215 C70,280 115,280 115,280"
              }
            ]
          },
          {
            "label": "a竖",
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
            "label": "a弧",
            "paths": [
              {
                "type": "path",
                "d": "M100,150 C100,150 55,150 55,215 C55,280 100,280 100,280"
              }
            ]
          },
          {
            "label": "a竖",
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
                "d": "M175,150 C145,150 145,215 145,215 C145,280 175,280 175,280 C205,280 205,215 205,215 C205,150 175,150 175,150"
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
                "d": "M95,150 C65,150 65,215 95,280"
              }
            ]
          },
          {
            "label": "o右弧",
            "paths": [
              {
                "type": "path",
                "d": "M95,150 C125,150 125,215 95,280"
              }
            ]
          },
          {
            "label": "u弧竖",
            "paths": [
              {
                "type": "path",
                "d": "M160,150 L160,240 C160,280 190,280 195,250"
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
            "label": "a弧",
            "paths": [
              {
                "type": "path",
                "d": "M100,150 C100,150 55,150 55,215 C55,280 100,280 100,280"
              }
            ]
          },
          {
            "label": "a竖",
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
            "label": "a弧",
            "paths": [
              {
                "type": "path",
                "d": "M70,150 C70,150 35,150 35,215 C35,280 70,280 70,280"
              }
            ]
          },
          {
            "label": "a竖",
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
            "label": "n竖",
            "paths": [
              {
                "type": "line",
                "x1": 120,
                "y1": 150,
                "x2": 120,
                "y2": 280
              }
            ]
          },
          {
            "label": "n拱+g",
            "paths": [
              {
                "type": "path",
                "d": "M120,150 C120,150 160,120 160,150 L160,280"
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
                "x1": 35,
                "y1": 210,
                "x2": 85,
                "y2": 210
              }
            ]
          },
          {
            "label": "e弧",
            "paths": [
              {
                "type": "path",
                "d": "M85,210 C85,150 35,150 35,210 C35,280 85,280 85,270"
              }
            ]
          },
          {
            "label": "n竖",
            "paths": [
              {
                "type": "line",
                "x1": 125,
                "y1": 150,
                "x2": 125,
                "y2": 280
              }
            ]
          },
          {
            "label": "ng拱尾",
            "paths": [
              {
                "type": "path",
                "d": "M125,150 C125,150 165,120 165,150 L165,280 C165,310 145,320 135,310"
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
