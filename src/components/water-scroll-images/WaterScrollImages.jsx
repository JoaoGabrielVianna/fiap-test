import React, { useState, useEffect } from 'react';

import onda001 from '../../assets/imgs/water/water_001.jpg'
import onda002 from '../../assets/imgs/water/water_002.jpg'
import onda003 from '../../assets/imgs/water/water_003.jpg'
import onda004 from '../../assets/imgs/water/water_004.jpg'
import onda005 from '../../assets/imgs/water/water_005.jpg'
import onda006 from '../../assets/imgs/water/water_006.jpg'
import onda007 from '../../assets/imgs/water/water_007.jpg'
import onda008 from '../../assets/imgs/water/water_008.jpg'
import onda009 from '../../assets/imgs/water/water_009.jpg'
import onda010 from '../../assets/imgs/water/water_010.jpg'
import onda011 from '../../assets/imgs/water/water_011.jpg'
import onda012 from '../../assets/imgs/water/water_012.jpg'
import onda013 from '../../assets/imgs/water/water_013.jpg'
import onda014 from '../../assets/imgs/water/water_014.jpg'
import onda015 from '../../assets/imgs/water/water_015.jpg'
import onda016 from '../../assets/imgs/water/water_016.jpg'
import onda017 from '../../assets/imgs/water/water_017.jpg'
import onda018 from '../../assets/imgs/water/water_018.jpg'
import onda019 from '../../assets/imgs/water/water_019.jpg'
import onda020 from '../../assets/imgs/water/water_020.jpg'
import onda021 from '../../assets/imgs/water/water_021.jpg'
import onda022 from '../../assets/imgs/water/water_022.jpg'
import onda023 from '../../assets/imgs/water/water_023.jpg'
import onda024 from '../../assets/imgs/water/water_024.jpg'
import onda025 from '../../assets/imgs/water/water_025.jpg'
import onda026 from '../../assets/imgs/water/water_026.jpg'
import onda027 from '../../assets/imgs/water/water_027.jpg'
import onda028 from '../../assets/imgs/water/water_028.jpg'
import onda029 from '../../assets/imgs/water/water_029.jpg'
import onda030 from '../../assets/imgs/water/water_030.jpg'
import onda031 from '../../assets/imgs/water/water_031.jpg'
import onda032 from '../../assets/imgs/water/water_032.jpg'
import onda033 from '../../assets/imgs/water/water_033.jpg'
import onda034 from '../../assets/imgs/water/water_034.jpg'
import onda035 from '../../assets/imgs/water/water_035.jpg'
import onda036 from '../../assets/imgs/water/water_036.jpg'
import onda037 from '../../assets/imgs/water/water_037.jpg'
import onda038 from '../../assets/imgs/water/water_038.jpg'
import onda039 from '../../assets/imgs/water/water_039.jpg'
import onda040 from '../../assets/imgs/water/water_040.jpg'
import onda041 from '../../assets/imgs/water/water_041.jpg'
import onda042 from '../../assets/imgs/water/water_042.jpg'
import onda043 from '../../assets/imgs/water/water_043.jpg'
import onda044 from '../../assets/imgs/water/water_044.jpg'
import onda045 from '../../assets/imgs/water/water_045.jpg'
import onda046 from '../../assets/imgs/water/water_046.jpg'
import onda047 from '../../assets/imgs/water/water_047.jpg'
import onda048 from '../../assets/imgs/water/water_048.jpg'
import onda049 from '../../assets/imgs/water/water_049.jpg'
import onda050 from '../../assets/imgs/water/water_050.jpg'
import onda051 from '../../assets/imgs/water/water_051.jpg'
import onda052 from '../../assets/imgs/water/water_052.jpg'
import onda053 from '../../assets/imgs/water/water_053.jpg'
import onda054 from '../../assets/imgs/water/water_054.jpg'
import onda055 from '../../assets/imgs/water/water_055.jpg'
import onda056 from '../../assets/imgs/water/water_056.jpg'
import onda057 from '../../assets/imgs/water/water_057.jpg'
import onda058 from '../../assets/imgs/water/water_058.jpg'
import onda059 from '../../assets/imgs/water/water_059.jpg'
import onda060 from '../../assets/imgs/water/water_060.jpg'
import onda061 from '../../assets/imgs/water/water_061.jpg'
import onda062 from '../../assets/imgs/water/water_062.jpg'
import onda063 from '../../assets/imgs/water/water_063.jpg'
import onda064 from '../../assets/imgs/water/water_064.jpg'
import onda065 from '../../assets/imgs/water/water_065.jpg'
import onda066 from '../../assets/imgs/water/water_066.jpg'
import onda067 from '../../assets/imgs/water/water_067.jpg'
import onda068 from '../../assets/imgs/water/water_068.jpg'
import onda069 from '../../assets/imgs/water/water_069.jpg'
import onda070 from '../../assets/imgs/water/water_070.jpg'
import onda071 from '../../assets/imgs/water/water_071.jpg'
import onda072 from '../../assets/imgs/water/water_072.jpg'
import onda073 from '../../assets/imgs/water/water_073.jpg'
import onda074 from '../../assets/imgs/water/water_074.jpg'
import onda075 from '../../assets/imgs/water/water_075.jpg'
import onda076 from '../../assets/imgs/water/water_076.jpg'
import onda077 from '../../assets/imgs/water/water_077.jpg'
import onda078 from '../../assets/imgs/water/water_078.jpg'
import onda079 from '../../assets/imgs/water/water_079.jpg'
import onda080 from '../../assets/imgs/water/water_080.jpg'
import onda081 from '../../assets/imgs/water/water_081.jpg'
import onda082 from '../../assets/imgs/water/water_082.jpg'
import onda083 from '../../assets/imgs/water/water_083.jpg'
import onda084 from '../../assets/imgs/water/water_084.jpg'
import onda085 from '../../assets/imgs/water/water_085.jpg'
import onda086 from '../../assets/imgs/water/water_086.jpg'
import onda087 from '../../assets/imgs/water/water_087.jpg'
import onda088 from '../../assets/imgs/water/water_088.jpg'
import onda089 from '../../assets/imgs/water/water_089.jpg'
import onda090 from '../../assets/imgs/water/water_090.jpg'
import onda091 from '../../assets/imgs/water/water_091.jpg'
import onda092 from '../../assets/imgs/water/water_092.jpg'
import onda093 from '../../assets/imgs/water/water_093.jpg'
import onda094 from '../../assets/imgs/water/water_094.jpg'
import onda095 from '../../assets/imgs/water/water_095.jpg'
import onda096 from '../../assets/imgs/water/water_096.jpg'
import onda097 from '../../assets/imgs/water/water_097.jpg'
import onda098 from '../../assets/imgs/water/water_098.jpg'
import onda099 from '../../assets/imgs/water/water_099.jpg'
import onda100 from '../../assets/imgs/water/water_100.jpg'
import onda101 from '../../assets/imgs/water/water_101.jpg'
import onda102 from '../../assets/imgs/water/water_102.jpg'
import onda103 from '../../assets/imgs/water/water_103.jpg'
import onda104 from '../../assets/imgs/water/water_104.jpg'
import onda105 from '../../assets/imgs/water/water_105.jpg'
import onda106 from '../../assets/imgs/water/water_106.jpg'
import onda107 from '../../assets/imgs/water/water_107.jpg'
import onda108 from '../../assets/imgs/water/water_108.jpg'
import onda109 from '../../assets/imgs/water/water_109.jpg'
import onda110 from '../../assets/imgs/water/water_110.jpg'
import onda111 from '../../assets/imgs/water/water_111.jpg'
import onda112 from '../../assets/imgs/water/water_112.jpg'
import onda113 from '../../assets/imgs/water/water_113.jpg'
import onda114 from '../../assets/imgs/water/water_114.jpg'
import onda115 from '../../assets/imgs/water/water_115.jpg'
import onda116 from '../../assets/imgs/water/water_116.jpg'
import onda117 from '../../assets/imgs/water/water_117.jpg'
import onda118 from '../../assets/imgs/water/water_118.jpg'
import onda119 from '../../assets/imgs/water/water_119.jpg'
import onda120 from '../../assets/imgs/water/water_120.jpg'
import onda121 from '../../assets/imgs/water/water_121.jpg'
import onda122 from '../../assets/imgs/water/water_122.jpg'
import onda123 from '../../assets/imgs/water/water_123.jpg'
import onda124 from '../../assets/imgs/water/water_124.jpg'
import onda125 from '../../assets/imgs/water/water_125.jpg'
import onda126 from '../../assets/imgs/water/water_126.jpg'
import onda127 from '../../assets/imgs/water/water_127.jpg'
import onda128 from '../../assets/imgs/water/water_128.jpg'
import onda129 from '../../assets/imgs/water/water_129.jpg'
import onda130 from '../../assets/imgs/water/water_130.jpg'
import onda131 from '../../assets/imgs/water/water_131.jpg'
import onda132 from '../../assets/imgs/water/water_132.jpg'
import onda133 from '../../assets/imgs/water/water_133.jpg'
import onda134 from '../../assets/imgs/water/water_134.jpg'
import onda135 from '../../assets/imgs/water/water_135.jpg'
import onda136 from '../../assets/imgs/water/water_136.jpg'
import onda137 from '../../assets/imgs/water/water_137.jpg'
import onda138 from '../../assets/imgs/water/water_138.jpg'
import onda139 from '../../assets/imgs/water/water_139.jpg'
import onda140 from '../../assets/imgs/water/water_140.jpg'
import onda141 from '../../assets/imgs/water/water_141.jpg'
import onda142 from '../../assets/imgs/water/water_142.jpg'
import onda143 from '../../assets/imgs/water/water_143.jpg'
import onda144 from '../../assets/imgs/water/water_144.jpg'
import onda145 from '../../assets/imgs/water/water_145.jpg'
import onda146 from '../../assets/imgs/water/water_146.jpg'
import onda147 from '../../assets/imgs/water/water_147.jpg'
import onda148 from '../../assets/imgs/water/water_148.jpg'
import onda149 from '../../assets/imgs/water/water_149.jpg'
import onda150 from '../../assets/imgs/water/water_150.jpg'
import onda151 from '../../assets/imgs/water/water_151.jpg'
import onda152 from '../../assets/imgs/water/water_152.jpg'
import onda153 from '../../assets/imgs/water/water_153.jpg'
import onda154 from '../../assets/imgs/water/water_154.jpg'
import onda155 from '../../assets/imgs/water/water_155.jpg'
import onda156 from '../../assets/imgs/water/water_156.jpg'
import onda157 from '../../assets/imgs/water/water_157.jpg'
import onda158 from '../../assets/imgs/water/water_158.jpg'
import onda159 from '../../assets/imgs/water/water_159.jpg'
import onda160 from '../../assets/imgs/water/water_160.jpg'
import onda161 from '../../assets/imgs/water/water_161.jpg'
import onda162 from '../../assets/imgs/water/water_162.jpg'
import onda163 from '../../assets/imgs/water/water_163.jpg'
import onda164 from '../../assets/imgs/water/water_164.jpg'
import onda165 from '../../assets/imgs/water/water_165.jpg'
import onda166 from '../../assets/imgs/water/water_166.jpg'
import onda167 from '../../assets/imgs/water/water_167.jpg'
import onda168 from '../../assets/imgs/water/water_168.jpg'
import onda169 from '../../assets/imgs/water/water_169.jpg'
import onda170 from '../../assets/imgs/water/water_170.jpg'
import onda171 from '../../assets/imgs/water/water_171.jpg'
import onda172 from '../../assets/imgs/water/water_172.jpg'
import onda173 from '../../assets/imgs/water/water_173.jpg'
import onda174 from '../../assets/imgs/water/water_174.jpg'
import onda175 from '../../assets/imgs/water/water_175.jpg'
import onda176 from '../../assets/imgs/water/water_176.jpg'
import onda177 from '../../assets/imgs/water/water_177.jpg'
import onda178 from '../../assets/imgs/water/water_178.jpg'
import onda179 from '../../assets/imgs/water/water_179.jpg'
import onda180 from '../../assets/imgs/water/water_180.jpg'
import onda181 from '../../assets/imgs/water/water_181.jpg'
import onda182 from '../../assets/imgs/water/water_182.jpg'
import onda183 from '../../assets/imgs/water/water_183.jpg'
import onda184 from '../../assets/imgs/water/water_184.jpg'
import onda185 from '../../assets/imgs/water/water_185.jpg'
import onda186 from '../../assets/imgs/water/water_186.jpg'
import onda187 from '../../assets/imgs/water/water_187.jpg'
import onda188 from '../../assets/imgs/water/water_188.jpg'
import onda189 from '../../assets/imgs/water/water_189.jpg'
import onda190 from '../../assets/imgs/water/water_190.jpg'
import onda191 from '../../assets/imgs/water/water_191.jpg'

const WaterScrollImages = ({ className = '' }) => {

  const images = [
    onda001, onda002, onda003, onda004, onda005, onda006, onda007, onda008, onda009, onda010,
    onda011, onda012, onda013, onda014, onda015, onda016, onda017, onda018, onda019, onda020,
    onda021, onda022, onda023, onda024, onda025, onda026, onda027, onda028, onda029, onda030,
    onda031, onda032, onda033, onda034, onda035, onda036, onda037, onda038, onda039, onda040,
    onda041, onda042, onda043, onda044, onda045, onda046, onda047, onda048, onda049, onda050,
    onda051, onda052, onda053, onda054, onda055, onda056, onda057, onda058, onda059, onda060,
    onda061, onda062, onda063, onda064, onda065, onda066, onda067, onda068, onda069, onda070,
    onda071, onda072, onda073, onda074, onda075, onda076, onda077, onda078, onda079, onda080,
    onda081, onda082, onda083, onda084, onda085, onda086, onda087, onda088, onda089, onda090,
    onda091, onda092, onda093, onda094, onda095, onda096, onda097, onda098, onda099, onda100,
    onda101, onda102, onda103, onda104, onda105, onda106, onda107, onda108, onda109, onda110,
    onda111, onda112, onda113, onda114, onda115, onda116, onda117, onda118, onda119, onda120,
    onda121, onda122, onda123, onda124, onda125, onda126, onda127, onda128, onda129, onda130,
    onda131, onda132, onda133, onda134, onda135, onda136, onda137, onda138, onda139, onda140,
    onda141, onda142, onda143, onda144, onda145, onda146, onda147, onda148, onda149, onda150,
    onda151, onda152, onda153, onda154, onda155, onda156, onda157, onda158, onda159, onda160,
    onda161, onda162, onda163, onda164, onda165, onda166, onda167, onda168, onda169, onda170,
    onda171, onda172, onda173, onda174, onda175, onda176, onda177, onda178, onda179, onda180,
    onda181, onda182, onda183, onda184, onda185, onda186, onda187, onda188, onda189, onda190,
    onda191,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = ((scrollTop - (maxScrollTop / 2)) / (maxScrollTop / 2)) * 2; //scrollTop / maxScrollTop;
    const newImageIndex = Math.min(
      images.length - 1,
      Math.floor(scrollFraction * images.length)
    );
    setCurrentImageIndex(newImageIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <img src={images[currentImageIndex]} className={className} />
      {/* <img src={images[190]} className={className} /> */}
    </div>
  );
};

export default WaterScrollImages;
