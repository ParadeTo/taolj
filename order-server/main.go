package main

import (
	"context"
	"fmt"
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

func (s *Server) FindOne(context.Context, *pb.OrderById) (*pb.Order, error) {
	fmt.Println("FindOne")
	order := &pb.Order{Id: 1, Price: 99.9, CreateTime: time.Now().Unix(), ItemId: 1}
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
