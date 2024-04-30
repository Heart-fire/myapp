import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/charts';

const PlotMaps = {}; // 在全局范围内声明空的 PlotMaps 对象
//useEffect 钩子中设置了初始活跃度。根据需要修改活跃度格式和值。
const DemoPie = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // 在这里设置您的活跃度
    setData({
      "pie1": [
        {
          "area": "管理员",
          "活跃度": 40,
          "sale": 20000
        },
        {
          "area": "心火火火",
          "活跃度": 80,
          "sale": 10000
        },
        {
          "area": "普通用户",
          "活跃度": 50,
          "sale": 8000
        },
        {
          "area": "状态正常",
          "活跃度": 48,
          "sale": 800
        },
        {
          "area": "状态注销",
          "活跃度": 19,
          "sale": 1000
        },
        {
          "area": "状态封号",
          "活跃度": 10,
          "sale": 1000
        },
        {
          "area": "男性",
          "活跃度": 55,
          "sale": 1000
        },
        {
          "area": "女性",
          "活跃度": 45,
          "sale": 1000
        },


      ],
      "pie2": [
        {
          "time": "2024季度",
          "area": "管理员",
          "贡献值": 20000
        },
        {
          "time": "2024季度",
          "area": "心火火火",
          "贡献值": 30000
        },
        {
          "time": "2024季度",
          "area": "普通用户",
          "贡献值": 9000
        },
        {
          "time": "2024季度",
          "area": "状态正常",
          "贡献值": 10000
        },
        {
          "time": "2024季度",
          "area": "状态注销",
          "贡献值": 4000
        },
        {
          "time": "2024季度",
          "area": "状态封号",
          "贡献值": 2000
        },
        {
          "time": "2024季度",
          "area": "男性",
          "贡献值": 10000
        },
        {
          "time": "2024季度",
          "area": "女性",
          "贡献值": 7000
        },


      ]
    });
  }, []);

  if (!Object.keys(data).length) {
    return null;
  }

  const showTooltip = (evt, pie) => {
    Object.keys(PlotMaps).forEach((plot) => {
      if (plot !== pie) {
        PlotMaps[plot].chart.emit('tooltip:show', {
          data: { data: { area: evt.data.data.area } },
        });
        PlotMaps[plot].chart.emit('element:highlight', {
          data: { data: { area: evt.data.data.area } },
        });
      }
    });
  };

  const hideTooltip = (evt, pie) => {
    Object.keys(PlotMaps).forEach((plot) => {
      if (plot !== pie) {
        PlotMaps[plot].chart.emit('tooltip:hide', {
          data: { data: { area: evt.data.data.area } },
        });
        PlotMaps[plot].chart.emit('element:unhighlight', {
          data: { data: { area: evt.data.data.area } },
        });
      }
    });
  };

  const LeftConfig = {
    angleField: '活跃度',
    colorField: 'area',
    data: data.pie1,
    label: {
      text: '活跃度',
    },
    legend: false,
    tooltip: {
      title: 'area',
    },
    interaction: {
      elementHighlight: true,
    },
    state: {
      inactive: { opacity: 0.5 },
    },
  };
  const RightConfig = {
    angleField: '贡献值',
    colorField: 'area',
    data: data.pie2,
    label: {
      text: '贡献值',
    },
    legend: false,
    tooltip: {
      title: 'area',
    },
    interaction: {
      elementHighlight: true,
    },
    state: {
      inactive: { opacity: 0.5 },
    },
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Pie
        style={{ width: '50%' }}
        {...LeftConfig}
        onReady={(plot) => {
          PlotMaps.leftPie = plot;
          plot.chart.on('interval:pointerover', (evt) => {
            showTooltip(evt, 'leftPie');
          });
          plot.chart.on('interval:pointerout', (evt) => {
            hideTooltip(evt, 'leftPie');
          });
        }}
      />
      <Pie
        style={{ width: '50%' }}
        {...RightConfig}
        onReady={(plot) => {
          PlotMaps.rightPie = plot;
          plot.chart.on('interval:pointerover', (evt) => {
            showTooltip(evt, 'rightPie');
          });
          plot.chart.on('interval:pointerout', (evt) => {
            hideTooltip(evt, 'rightPie');
          });
        }}
      />
    </div>
  );
};

export default DemoPie;
