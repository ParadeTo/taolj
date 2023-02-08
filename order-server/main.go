package main

import (
	"context"
	"log"
	"net"
	"order-server/pb"
	"time"

	"google.golang.org/grpc"
)

const PORT = "9002"

type Server struct {
	pb.UnimplementedOrderServiceServer
}

func (s *Server) FindOne(ctx context.Context, request *pb.OrderById) (*pb.Order, error) {
	order := &pb.Order{Id: 1, Price: 99.9, CreateTime: time.Now().Unix(), ItemIds: []int32{1, 2}}
	return order, nil
}

func main() {
	server := grpc.NewServer()
	pb.RegisterOrderServiceServer(server, &Server{})

	lis, err := net.Listen("tcp", ":"+PORT)
	if err != nil {
		log.Fatalf("net.Listen err: %v", err)
	}
	server.Serve(lis)
}
