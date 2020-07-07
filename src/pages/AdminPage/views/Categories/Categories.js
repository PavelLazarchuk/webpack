import React, { Component } from 'react';
import { connect } from 'react-redux';

import Search from '../Search/Search';
import CategoryList from './CategoryList';
import { getAllCategory } from 'store/admin/categoryAction';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowForm: false,
			isChange: false,
			currentPage: 0,
			search: '',
		};
	}
	componentDidMount() {
		this.props.getAllCategory();
	}

	isDeleted() {
		this.props.getAllCategory();
	};
	showFormForAdd() {
		let val = !this.state.isShowForm;
		this.setState({ isShowForm: val });
		this.props.getAllCategory();
	};
	changeCategory() {
		let val = !this.state.isChange;
		this.setState({ isChange: val });
		this.props.getAllCategory();
	};

	pageChangeHandler({ selected }) {
		this.setState({ currentPage: selected });
	}

	searchHandler (search) {
		this.setState({ search, currentPage: 0 });
	};
	
	getFilteredData() {
		const { search } = this.state;
		const { category } = this.props;

		if (!search) {
			return category;
		}
		let result = category.filter((item) =>
			item['categoryName'].toLowerCase().includes(search.toLowerCase()),
		);
		if (!result.length) {
			result = this.props.category;
		}
		return result;
	}
	render() {
		const { category } = this.props;
		return (
			<div className="animated fadeIn">
				<Row>
					<Col sm="12">
						{category && Array.isArray(category) && <Search onSearch={this.searchHandler} />}
						<Card>
							<CardHeader className="d-flex justify-content-between">
								<strong>Список категорій: </strong>
								<button className="btn btn-pill btn-success" onClick={this.showFormForAdd}>
									Додати категорію
								</button>
							</CardHeader>
							<CardBody>
								<div id="accordionCategory">
									<div className="pb-4">
										<CategoryList
											category={category}
											changeCategory={this.changeCategory}
											isChange={this.state.isChange}
											isDeleted={this.isDeleted}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
const mapStateToProps = ({ admin }) => ({
	category: admin.category,
	error: admin.error,
});

const mapDispatchToProps = {
	getAllCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
