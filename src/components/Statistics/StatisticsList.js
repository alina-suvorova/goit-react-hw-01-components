import PropTypes from 'prop-types';
import style from './Statistics.module.css'
import StatisticsItem from './StatisticsItem';

function StatisticsList({title, items}) {
    
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.statList}>
                {items.map((item)=>
                <li className={style.statListItem} key={item.id} style={{backgroundColor: item.color}} >                
                    <StatisticsItem
                        label={item.label}
                        percent={item.percentage} 
                    />
                </li>
                )}
            </ul>
        </section>
        
    );
}

export default StatisticsList;

StatisticsList.propType = {
    items: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
        }),
    ),
}