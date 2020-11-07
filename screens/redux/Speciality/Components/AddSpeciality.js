import React, {Component} from "react";
import {connect} from 'react-redux';
import {Button, Modal, Select, Form, Input, Icon, Row, message} from "antd";
import IntlMessages from "../../../util/IntlMessages";
import {getSpecialities, getLevels} from '../actions/index';
import axios from 'util/Api'

const {Option} = Select;

class AddSpeciality extends Component {
  state = {
    selectedItems: [],
    specialities: [],
    list: [],
    value: undefined,
    levelList: [],
    dataSource: [],
    showAddModal: false,
  };

  componentDidMount() {
    if(!this.props.specialities)
    this.props.getSpecialities();
    if(!this.props.levels)
    this.props.getLevels();
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  handleSearch = value => {
    if (value) {
      let val = this.Capitalize(value);
      let mylist = this.state.list.filter(s => s.title.includes(val));
      this.setState({specialities: mylist});
    } else {
      this.setState({specialities: []});
    }
  };

  handleChange = value => {
    this.setState({value});
  };
  handleChangeSelect = selectedItems => {
    this.setState({selectedItems});

  };
  handleChangeSelects = selectedItemss => {
    this.setState({selectedItemss});

  };
  postRequest = () => {
    console.log(this.state)

    const formData = new FormData();
    formData.append('Title', this.state.nomLivre);

    formData.append('CategoryId', 1);
    var specialiter = {
      LevelId: 10
    }
    var SpecialityLevel = [];
    SpecialityLevel.push(specialiter)
    var Form = {
      Title: this.state.nomLivre,
      CategoryId: 1,
      SpecialityLevel

    }


    formData.append('SpecialityLevel', SpecialityLevel);

    var id = localStorage.getItem('userid')
    axios.post("/Speciality/PostSpecialityRequest/" + id, Form).then(
      response => console.log(response)
    )
    message.success("Votre matière doit être approuvée par notre équipe nous reviendrons vers vous d’ici 48H")
    this.setState({showAddModal: false})
  }
  onChangeLivreName = e => {

    this.setState({nomLivre: e.target.value});

  }

  render() {
    const {visible, onCancel, onCreate, form, specialities, levels} = this.props;
    const {selectedItems} = this.state;
    const filteredOptions = levels.filter(o => !selectedItems.includes(o.title));
    const {getFieldDecorator} = form;
    return (
      <div>
        <Row>
          <Modal
            title={<IntlMessages id="user.profile.addspeciality"/>}
            visible={visible}
            onOk={onCreate}
            onCancel={onCancel}
            footer={[
              <Button key="back" onClick={onCancel}>
                <IntlMessages id="user.profile.buttoncancel"/>
              </Button>,
              <Button key="submit" type="primary" onClick={onCreate}>
                <IntlMessages id="user.profile.buttonok"/>

              </Button>
            ]}
          >
            <div style={{textAlign: "left"}}><p style={{textAlign: "-webkit-right"}}><Icon style={{cursor: "pointer"}}
                                                                                           onClick={() => this.setState({showAddModal: true})}
                                                                                           type="plus"/></p></div>
            <Form layout="vertical">
              <Form.Item label={<IntlMessages id="user.profile.speciality"/>}>
                {getFieldDecorator('speciality', {
                  rules: [{
                    required: true,
                    message: <div><IntlMessages id='user.profile.messegevalid'/> <IntlMessages
                      id='user.profile.levels'/>
                    </div>
                  }],
                })(
                  <Select
                    showSearch
                    placeholder="Matiére"
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    onSearch={this.handleSearch}
                    optionFilterProp="children"

                    onChange={this.handleChange}
                    notFoundContent={null}
                    filterOption={(inputValue, option) =>
                      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                  >
                    {specialities.map(s =>
                      <Option key={s.id} value={s.id}>{s.title}</Option>
                    )}
                  </Select>
                )}
              </Form.Item>
              <Form.Item label={<IntlMessages id="user.profile.levels"/>}>
                {getFieldDecorator('level', {

                  rules: [{
                    required: true,
                    message: <div><IntlMessages id='user.profile.messegevalid'/> <IntlMessages
                      id='user.profile.levels'/>
                    </div>
                  }],
                })(
                  <Select
                    mode="multiple"
                    placeholder=""
                    onChange={this.handleChangeSelect}
                    style={{width: '100%'}}
                    filterOption={(inputValue, option) =>
                      option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                  >
                    {filteredOptions.map(item => (
                      <Select.Option key={item.id} value={item.id}>
                        {item.title}
                      </Select.Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Form>

          </Modal>
        </Row>
        <Modal
          title={"Nouvelle spécialité"}
          visible={this.state.showAddModal}
          onOk={this.postRequest}
          bodyStyle={{height: "280px"}}
          onCancel={() => this.setState({showAddModal: false})}
          footer={[
            <Button key="back" onClick={onCancel}>
              <IntlMessages id="user.profile.buttoncancel"/>
            </Button>,
            <Button key="submit" type="primary" onClick={this.postRequest}>
              <IntlMessages id="user.profile.buttonok"/>

            </Button>
          ]}
        >
          <Form layout="vertical">
            <Form.Item label={<IntlMessages id="user.profile.speciality"/>}>
              {getFieldDecorator('Name', {
                rules: [{
                  message: <div><IntlMessages id='user.profile.messegevalid'/> <IntlMessages id='user.profile.levels'/>
                  </div>
                }],
              })(
                <Input
                  style={{width: "100%", marginBottom: "15px"}}
                  type="search"
                  value={this.state.nomLivre}
                  onChange={this.onChangeLivreName}
                  placeholder="Entrer le nom du spécialité"
                  prefix={<Icon type="book" style={{color: 'rgba(0,0,0,.25)'}}/>}

                />
              )}
            </Form.Item>
            <Form.Item label={<IntlMessages id="user.profile.levels"/>}>
              {getFieldDecorator('levels', {})(
                <Select
                  mode="multiple"
                  placeholder=""
                  onChange={this.handleChangeSelects}
                  style={{width: '100%'}}
                  filterOption={(inputValue, option) =>
                    option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                >
                  {filteredOptions.map(item => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.title}
                    </Select.Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Form>

        </Modal>
      </div>

    );
  }
}

const mapStateToProps = ({list_specialities}) => {
  const {specialities, levels} = list_specialities;
  return {specialities, levels}
};
const AddSpecialityForm = Form.create({name: 'addspeciality'})(AddSpeciality);
export default connect(mapStateToProps, {getSpecialities, getLevels})(AddSpecialityForm);






