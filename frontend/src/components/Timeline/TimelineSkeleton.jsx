function TimelineSkeleton() {
  return (
    <div className="timeline-scroll">
      {Array.from({ length: 4 }).map(
        (_, index) => (
          <div
            key={index}
            className="timeline-skeleton"
          />
        )
      )}
    </div>
  );
}

export default TimelineSkeleton;