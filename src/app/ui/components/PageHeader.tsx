const PageHeader = ({title,buttons}) => {
    return (
        <div>
            <h2>{title}</h2>
            {buttons}
        </div>
    );
}

export default PageHeader;