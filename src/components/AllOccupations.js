import React, { Component } from "react";
import { Link } from "react-router-dom";
import GapAPI from "../GapAPI.js";

class AllOccupations extends Component {
    renderUl(g) {
        const children = GapAPI.gaps.filter(g2 => g2.parent_slug === g.slug);
        if (children && children.length > 0) {
            return <ul key={g.slug}>{this.renderLi(g)}</ul>;
        } else {
            return this.renderLi(g);
        }
    }
    renderLi(g) {
        return (
            <li key={g.slug}>
                <Link to={`/gap/${g.slug}`}>
                    {GapAPI.capitalize(
                        GapAPI.cleanOccupationName(g.occupation_name)
                    )}
                </Link>
                {GapAPI.gaps
                    .filter(child => child.parent_slug === g.slug)
                    .map(g => this.renderUl(g))}
            </li>
        );
    }

    render() {
        var props = this.props;
        return (
            <div className="span4">
                {GapAPI.gaps
                    .filter(g => g.slug === props.columnSlug)
                    .map(g => this.renderUl(g))}
            </div>
        );
    }
}

export default AllOccupations;
