import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AdviserPagination extends Component {
    constructor(props) {
        super(props);

        this.renderPages = this.renderPages.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    changePage(page) {
        const { handleClick } = this.props;
        handleClick(page);
    }

    renderPages = (numberOfPages) => {
        const { currentPage } = this.props;

        const pages = [];

        for (let i = 1; i <= numberOfPages; i += 1) {
            pages.push(
                // eslint-disable-next-line max-len
                <span role="presentation" key={i.toString()} onClick={currentPage !== parseInt(i.toString(), 10) ? this.changePage.bind(this, i) : undefined} className={currentPage === i ? 'active' : ''}>
                    {i}
                </span>,
            );
        }

        return pages;
    };

    render() {
        const { pagination, currentPage } = this.props;
        const {
            pages,
        } = pagination;
        const totalItems = pagination.total;
        const firstItem = (currentPage - 1) * 10 + 1;
        const lastItem = (currentPage - 1) * 10 + 10 <= totalItems ? (currentPage - 1) * 10 + 1 : totalItems;
        return (
            <section className="adviser-pagination dis-f ai-c jc-sb">
                <div className="items-count">
                    <span>
                        {`${firstItem}-${lastItem} of ${totalItems}`}
                    </span>
                </div>
                <div className="numbers dis-f ai-c">
                    {
                        currentPage > 1
                        && (
                            <img
                                role="presentation"
                                src="/static/img/icons/arrow-prev.svg"
                                alt="Next"
                                title="Next"
                                onClick={this.changePage.bind(this, currentPage - 1)}
                            />
                        )
                    }
                    {this.renderPages(pages)}
                    {
                        currentPage < pages
                        && (
                            <img
                                role="presentation"
                                src="/static/img/icons/arrow-next.svg"
                                alt="Next"
                                title="Next"
                                onClick={this.changePage.bind(this, currentPage + 1)}
                            />
                        )
                    }
                </div>
            </section>
        );
    }
}

AdviserPagination.propTypes = {
    handleClick: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    pagination: PropTypes.object.isRequired,
};

export default AdviserPagination;
