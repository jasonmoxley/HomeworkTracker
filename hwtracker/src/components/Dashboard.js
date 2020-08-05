import React from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from '../actions';
import _ from 'lodash';
import moment from 'moment';


class Dashboard extends React.Component {

    renderTasks() {
        const { tasks } = this.props;
        const newTasks = Object.keys(tasks).map(item => {
            return { [item]: tasks[item] };
        });
        return newTasks.map(task => {
            const id = _.keysIn(task)[0];
            return (
                <>
                    <h3 className="ui header">{moment(task[id].date).format('LL')}</h3>
                    <div className="item" style={{ marginLeft: "30px" }}>
                        <div className="content">
                            <div className="header">{task[id].title}</div>
                            <div className="meta">{`Due ${moment(task[id].date).format('lll')}`}</div>
                            <div className="description">{task[id].description}</div>
                        </div>
                    </div>
                </>
            );
        })
    }

    render() {
        return (
            <div className="ui divided items">
                {this.renderTasks()}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        tasks: state.hw.tasks
    }
}

export default connect(mapStateToProps)(Dashboard);