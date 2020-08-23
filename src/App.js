import React from "react";
import Navigation from "./components/Navbar/Navbar.component";
import Sidebar from "./components/Sidebar/Sidebar.component";
import Titlebar from "./components/Title/Titlebar.component";
import Content from "./components/Content/Content.component";
import Implementation from "./components/Implementation/Implementation.component";
import Footer from "./components/Footer/Footer.component";
import Wait from "./components/Wait/Wait.component";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTopic: null,
      colors: null,
      links: null,
      topics: null,
      application: null,
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get("https://snvc00documentationcenterapi.herokuapp.com/colors"),
        axios.get("https://snvc00documentationcenterapi.herokuapp.com/links"),
        axios.get("https://snvc00documentationcenterapi.herokuapp.com/topics"),
        axios.get("https://snvc00documentationcenterapi.herokuapp.com/appinfo"),
      ])
      .then((response) => {
        const newCurrentTopic =
          response[2].data[0].items.length > 0
            ? response[2].data[0].items[0]
            : null;

        this.setState({
          colors: response[0].data,
          links: response[1].data,
          topics: response[2].data,
          application: response[3].data.application,
          currentTopic: newCurrentTopic,
        });
      });
  }

  updateCurrent(name) {
    const categories = this.state.topics;

    for (let i = 0; i < categories.length; ++i) {
      var coincidences = categories[i].items.filter(
        (item) => item.name === name
      );
      if (coincidences.length > 0) {
        this.setState({
          currentTopic: coincidences[0],
        });
      }
    }
  }

  getLinksByCategory(category) {
    if (!this.state.links || this.state.links.length < 1) {
      return undefined;
    }

    return Array.from(this.state.links).filter((link) =>
      link.categories.includes(category)
    );
  }

  responsesAreValid() {
    try {
      if (
        this.state.colors.length < 1 ||
        this.state.links.length < 1 ||
        this.state.topics.length < 1 ||
        this.state.application === null
      ) {
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  render() {
    if (!this.responsesAreValid() || this.state.currentTopic === null) {
      return <Wait />;
    }

    const navbarLinks = this.getLinksByCategory("navbar");
    const infoLinks = this.getLinksByCategory("information");
    const helpLinks = this.getLinksByCategory("help");
    const colorIndex = Math.floor(Math.random() * this.state.colors.length);

    return (
      <div>
        <Sidebar
          categories={this.state.topics}
          updateCurrent={(event) => {
            this.updateCurrent(event);
          }}
        />
        <Navigation links={navbarLinks} />
        <Titlebar
          name={this.state.currentTopic.name}
          primaryColor={this.state.colors[colorIndex].primary}
          secondaryColor={this.state.colors[colorIndex].secondary}
        />
        <Content
          currentItem={this.state.currentTopic}
          primaryColor={this.state.colors[colorIndex].primary}
          secondaryColor={this.state.colors[colorIndex].secondary}
        />
        <Implementation
          implementations={this.state.currentTopic.implementations}
        />
        <Footer
          helpLinks={helpLinks}
          infoLinks={infoLinks}
          appData={this.state.application}
        />
      </div>
    );
  }
}

export default App;
