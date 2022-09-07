export const PageBackground = () => {
    return <div
          className="w-100"
          style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                marginTop: 80,
                height: 600,
                backgroundImage: "url(assets/main.jpg)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}

        >
            <img
                src="assets/title.png"
                alt="course title"
                className="img-fluid m-auto"
                style={{
                    width: 1000
                }}
            />
        </div>
}