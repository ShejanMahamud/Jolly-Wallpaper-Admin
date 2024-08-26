import {
  AppstoreAddOutlined,
  FileDoneOutlined,
  PictureOutlined,
  TagOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Table, Typography } from "antd";
import React from "react";
import CountUp from "react-countup";

const { Title, Text } = Typography;

// Static data
const overviewData = {
  totalCategories: 10,
  totalSubCategories: 25,
  totalTags: 50,
  totalWallpapers: 150,
  totalUsers: 75,
  reports: 5,
};

const trendingWallpapersData = [
  { key: "1", wallpaper: "Wallpaper 1", views: 120 },
  { key: "2", wallpaper: "Wallpaper 2", views: 100 },
  // Add more static data as needed
];

const mostDownloadedWallpapersData = [
  { key: "1", wallpaper: "Wallpaper 3", downloads: 80 },
  { key: "2", wallpaper: "Wallpaper 4", downloads: 70 },
  // Add more static data as needed
];

const popularWallpapersData = [
  { key: "1", wallpaper: "Wallpaper 5", popularity: 90 },
  { key: "2", wallpaper: "Wallpaper 6", popularity: 85 },
  // Add more static data as needed
];

const Overview: React.FC = () => {
  return (
    <div className="p-4">
      <Title level={2}>Overview</Title>

      {/* Header Cards */}
      <Row gutter={16} className="mb-4">
        <Col span={4}>
          <Card className="dashboard-card">
            <AppstoreAddOutlined
              style={{ fontSize: "24px", color: "#00CFE8" }}
            />
            <Title level={4} className="dashboard-card-title">
              <CountUp
                start={0}
                end={overviewData.totalCategories}
                duration={2}
                suffix="+"
              />
            </Title>
            <Text className="dashboard-card-text">Total Categories</Text>
          </Card>
        </Col>
        <Col span={4}>
          <Card className="dashboard-card">
            <TagOutlined style={{ fontSize: "24px", color: "#FF9F43" }} />
            <Title level={4} className="dashboard-card-title">
              <CountUp
                start={0}
                end={overviewData.totalTags}
                duration={2}
                suffix="+"
              />
            </Title>
            <Text className="dashboard-card-text">Total Tags</Text>
          </Card>
        </Col>
        <Col span={4}>
          <Card className="dashboard-card">
            <PictureOutlined style={{ fontSize: "24px", color: "#28C76F" }} />
            <Title level={4} className="dashboard-card-title">
              <CountUp
                start={0}
                end={overviewData.totalWallpapers}
                duration={2}
                suffix="+"
              />
            </Title>
            <Text className="dashboard-card-text">Total Wallpapers</Text>
          </Card>
        </Col>
        <Col span={4}>
          <Card className="dashboard-card">
            <UsergroupAddOutlined
              style={{ fontSize: "24px", color: "#1B2850" }}
            />
            <Title level={4} className="dashboard-card-title">
              <CountUp
                start={0}
                end={overviewData.totalUsers}
                duration={2}
                suffix="+"
              />
            </Title>
            <Text className="dashboard-card-text">Total Users</Text>
          </Card>
        </Col>
        <Col span={4}>
          <Card className="dashboard-card">
            <FileDoneOutlined style={{ fontSize: "24px", color: "#4BC770" }} />
            <Title level={4} className="dashboard-card-title">
              <CountUp start={0} end={overviewData.reports} duration={2} />
            </Title>
            <Text className="dashboard-card-text">Reports</Text>
          </Card>
        </Col>
      </Row>

      {/* Tables */}
      <Title level={3}>Trending Wallpapers (Last 24 Hours)</Title>
      <Table
        dataSource={trendingWallpapersData}
        columns={[
          { title: "Wallpaper", dataIndex: "wallpaper", key: "wallpaper" },
          { title: "Views", dataIndex: "views", key: "views" },
        ]}
        pagination={false}
        className="dashboard-table"
      />

      <Title level={3} className="mt-4">
        Most Downloaded Wallpapers (Last 24 Hours)
      </Title>
      <Table
        dataSource={mostDownloadedWallpapersData}
        columns={[
          { title: "Wallpaper", dataIndex: "wallpaper", key: "wallpaper" },
          { title: "Downloads", dataIndex: "downloads", key: "downloads" },
        ]}
        pagination={false}
        className="dashboard-table"
      />

      <Title level={3} className="mt-4">
        Popular Wallpapers (Last 24 Hours)
      </Title>
      <Table
        dataSource={popularWallpapersData}
        columns={[
          { title: "Wallpaper", dataIndex: "wallpaper", key: "wallpaper" },
          { title: "Popularity", dataIndex: "popularity", key: "popularity" },
        ]}
        pagination={false}
        className="dashboard-table"
      />
    </div>
  );
};

export default Overview;
